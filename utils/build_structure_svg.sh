#!/usr/bin/env bash
# Build the RISE RO-Crate profile structure diagram.
# Compiles rise-ro-crate-profile-structure.tex to PDF via pdflatex,
# converts to SVG via pdf2svg, and cleans up intermediate files.
#
# Requirements: pdflatex, pdf2svg

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

TEX_FILE="rise-ro-crate-profile-structure.tex"
RESOURCES_DIR="$REPO_ROOT/resources"
SVG_OUTPUT="$RESOURCES_DIR/rise-ro-crate-profile-structure.svg"

echo "=== Building $TEX_FILE -> SVG ==="

# Compile from resources/ so relative \input paths resolve correctly
cd "$RESOURCES_DIR"

echo ""
echo "--- pdflatex output ---"
pdflatex -interaction=nonstopmode "$TEX_FILE"
echo "--- end pdflatex output ---"
echo ""

PDF_FILE="${TEX_FILE%.tex}.pdf"
if [ ! -f "$PDF_FILE" ]; then
    echo "Error: pdflatex failed to produce $PDF_FILE"
    exit 1
fi

# Convert PDF to SVG
echo "Converting PDF -> SVG..."
pdf2svg "$PDF_FILE" "$SVG_OUTPUT"

# Cleanup intermediate files
rm -f "${TEX_FILE%.tex}".{pdf,aux,log,out,fls,fdb_latexmk,synctex.gz}

echo "=== Done! SVG written to: $SVG_OUTPUT ==="
