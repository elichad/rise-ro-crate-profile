#!/usr/bin/env bash
# Build GitLab Pages: generates versioned profile pages from git tags.
# Usage: ./build_pages.sh
#
# For each git tag, checks out that tag, runs generate_profile.py,
# converts rise-ro-crate-profile.md to index.html via Pandoc, and copies companion
# files into public/<version>/. Creates a root redirect to the latest version.

set -euo pipefail

# Always run from the repository root (one level up from utils/)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

OUTPUT_DIR="public"
TEMPLATE="resources/page_template.html"
COMPANION_FILES="\
types.csv vocabulary.csv context.jsonld \
ro-crate-metadata.json rise-ro-crate-profile-structure.svg \
rise-ro-crate-profile-schema.json rise-ro-crate-profile.ts \
rise_ro_crate_profile_pydantic.py"

rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

# Collect all tags (sorted by version)
TAGS=$(git tag -l --sort=version:refname)

if [ -z "$TAGS" ]; then
    echo "No tags found. Nothing to build."
    exit 0
fi

LATEST_TAG=""

# Save current branch/commit to return to later
ORIGINAL_REF=$(git rev-parse HEAD)

for TAG in $TAGS; do
    echo "=== Building version: $TAG ==="
    VERSION_DIR="$OUTPUT_DIR/$TAG"
    mkdir -p "$VERSION_DIR"

    # Checkout the tag
    git checkout "$TAG" --quiet

    # Run the profile generator
    python generate_profile.py

    # Extract titles from profile metadata
    TITLE=$(python -c "import json; print(json.load(open('profile_definition.json'))['metadata']['name'])")
    TAB_TITLE=$(python -c "import json; print(json.load(open('profile_definition.json'))['metadata']['name_short'])")

    # Convert markdown to HTML with Pandoc
    pandoc "generated_profile/rise-ro-crate-profile.md" \
        -o "$VERSION_DIR/index.html" \
        --standalone \
        --template="$TEMPLATE" \
        --metadata title="$TITLE" \
        --metadata tabtitle="$TAB_TITLE" \
        --from=gfm

    # Copy companion files
    for FILE in $COMPANION_FILES; do
        if [ -f "generated_profile/$FILE" ]; then
            cp "generated_profile/$FILE" "$VERSION_DIR/"
        fi
    done

    # Copy favicon from resources (not generated)
    [ -f "resources/favicon.svg" ] && cp "resources/favicon.svg" "$VERSION_DIR/"

    LATEST_TAG="$TAG"
    echo "    -> Built $VERSION_DIR/"
done

# Return to original ref
git checkout "$ORIGINAL_REF" --quiet 2>/dev/null || true

# Build "dev" version from current commit
echo "=== Building version: dev ==="
DEV_DIR="$OUTPUT_DIR/dev"
mkdir -p "$DEV_DIR"

python generate_profile.py

TITLE=$(python -c "import json; print(json.load(open('profile_definition.json'))['metadata']['name'])")
TAB_TITLE=$(python -c "import json; print(json.load(open('profile_definition.json'))['metadata']['name_short'])")

pandoc "generated_profile/rise-ro-crate-profile.md" \
    -o "$DEV_DIR/index.html" \
    --standalone \
    --template="$TEMPLATE" \
    --metadata title="$TITLE (dev)" \
    --metadata tabtitle="$TAB_TITLE (dev)" \
    --from=gfm

for FILE in $COMPANION_FILES; do
    if [ -f "generated_profile/$FILE" ]; then
        cp "generated_profile/$FILE" "$DEV_DIR/"
    fi
done

# Copy favicon from resources (not generated)
[ -f "resources/favicon.svg" ] && cp "resources/favicon.svg" "$DEV_DIR/"
echo "    -> Built $DEV_DIR/"

# Create root redirect to latest tagged version
cat > "$OUTPUT_DIR/index.html" <<EOF
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0; url=$LATEST_TAG/" />
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to <a href="$LATEST_TAG/">latest version ($LATEST_TAG)</a>...</p>
</body>
</html>
EOF

echo ""
echo "=== Done! Built versions: $TAGS + dev ==="
echo "=== Root redirects to: $LATEST_TAG ==="
