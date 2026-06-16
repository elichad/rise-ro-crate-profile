#!/bin/bash

set -e

# === Configuration ===
PYTHON_BIN=python3
VENV_NAME="venv-rise-profile"

# === Always create the venv in the repository root ===
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
VENV_DIR="$REPO_ROOT/$VENV_NAME"

if [ ! -d "$VENV_DIR" ]; then
    echo "Creating virtual environment in $VENV_DIR"
    $PYTHON_BIN -m venv "$VENV_DIR"
else
    echo "Virtual environment already exists in $VENV_DIR"
fi

# === Activate venv ===
source "$VENV_DIR/bin/activate"

# === Install dependencies in venv ===
echo "Install packages from requirements.txt"
pip3 install -r "$REPO_ROOT/requirements.txt"

# === Complete installation ===
echo "Virtual environment created successfully"
echo "Activate virtual environment with 'source $VENV_NAME/bin/activate'"
