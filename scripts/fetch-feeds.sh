#!/usr/bin/env bash
# Writes assets/qdbd.json (last month's PyPI downloads of qdbd) and assets/posts.json (latest three Substack posts).
# A failed or malformed fetch keeps the file from the previous run and never fails the job.
# usage: scripts/fetch-feeds.sh [qdbd] [posts]   (default: both; needs curl and jq)
set -uo pipefail
cd "$(dirname "$0")/.."

# save <file> <jq check>: reads JSON on stdin, publishes it only if the check passes
save() {
  if cat > "$1.tmp" && jq -e "$2" "$1.tmp" > /dev/null; then
    mv "$1.tmp" "$1"
  else
    rm -f "$1.tmp"
    echo "::warning::kept old $1" >&2
  fi
}

for source in ${@:-qdbd posts}; do
  case $source in
    qdbd)
      curl -fsS -m 20 https://pypistats.org/api/packages/quickdbd-cli/recent \
        | jq '{last_month: .data.last_month}' \
        | save assets/qdbd.json '(.last_month | type) == "number" and .last_month > 0' ;;
    posts)
      # Substack answers 403 to GitHub's runners, so the nightly workflow skips this one: run it from a laptop.
      # The archive list can keep an old title after a published post is renamed, so read each post for its current one.
      curl -fsSL -m 20 -A 'Mozilla/5.0' 'https://aehandbook.substack.com/api/v1/archive?sort=new&limit=3' \
        | jq -r '.posts[].slug' \
        | while read -r slug; do
            curl -fsSL -m 20 -A 'Mozilla/5.0' "https://aehandbook.substack.com/api/v1/posts/$slug" \
              | jq '{title, url: .canonical_url, date: .post_date[:10]}'
          done \
        | jq -s 'sort_by(.date) | reverse' \
        | save assets/posts.json 'length == 3 and all(.[]; (.title | length > 0) and (.url | startswith("https://aehandbook.substack.com/p/")))' ;;
    *) echo "unknown source: $source" >&2; exit 2 ;;
  esac
done
exit 0
