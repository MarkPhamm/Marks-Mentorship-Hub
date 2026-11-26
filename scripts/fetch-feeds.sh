#!/usr/bin/env bash
# Writes assets/qdbd.json (last month's PyPI downloads of qdbd).
# A failed or malformed fetch keeps the file from the previous run and makes the script exit 1 after the other sources.
# usage: scripts/fetch-feeds.sh [qdbd]   (needs curl and jq)
set -uo pipefail
cd "$(dirname "$0")/.."
failed=0

# save <file> <jq check>: reads JSON on stdin, publishes it only if the check passes
save() {
  if cat > "$1.tmp" && jq -e "$2" "$1.tmp" > /dev/null; then
    mv "$1.tmp" "$1"
  else
    rm -f "$1.tmp"
    echo "::warning::kept old $1" >&2
    return 1
  fi
}

for source in ${@:-qdbd}; do
  case $source in
    qdbd)
      curl -fsS -m 20 https://pypistats.org/api/packages/quickdbd-cli/recent \
        | jq '{last_month: .data.last_month}' \
        | save assets/qdbd.json '(.last_month | type) == "number" and .last_month > 0' || failed=1 ;;
    *) echo "unknown source: $source" >&2; exit 2 ;;
  esac
done
exit $failed
