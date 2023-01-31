#!/usr/bin/env bash

set -euo pipefail

exec ./node_modules/.bin/microbundle --format=modern,esm,cjs
