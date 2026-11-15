#!/usr/bin/env bash
# Writes assets/contrib.json: the last year of GitHub contributions, one level digit (0-4) per day.
# usage: scripts/fetch-contrib.sh [login]   (needs gh, authenticated)
set -euo pipefail
cd "$(dirname "$0")/.."

gh api graphql -f login="${1:-MarkPhamm}" -f query='
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionLevel } }
        }
      }
    }
  }' --jq '
  {NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4} as $level
  | .data.user.contributionsCollection.contributionCalendar
  | {
      total: .totalContributions,
      start: .weeks[0].contributionDays[0].date,
      levels: ([.weeks[].contributionDays[] | $level[.contributionLevel] | tostring] | join(""))
    }' > assets/contrib.json.tmp

# refuse to publish an empty or malformed calendar
jq -e '.total > 0 and (.levels | test("^[0-4]{360,372}$"))' assets/contrib.json.tmp > /dev/null
mv assets/contrib.json.tmp assets/contrib.json
