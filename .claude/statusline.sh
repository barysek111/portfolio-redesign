#!/usr/bin/env bash
# Status line: context window usage at 5% increments + estimated time left.
# Claude Code pipes a JSON blob to stdin on each refresh.

STATE="$(dirname "$0")/ctx-state.tmp"
input=$(cat)

remaining=$(echo "$input" | jq -r '.context_window.remaining_percentage // empty' 2>/dev/null)

# Before the first API response, remaining_percentage isn't available yet.
if [ -z "$remaining" ]; then
  printf 'ctx: —'
  exit 0
fi

# Used percentage, rounded DOWN to nearest 5 so the display only changes at multiples of 5.
used=$(awk "BEGIN {printf \"%.2f\", 100 - $remaining}")
threshold=$(awk "BEGIN {printf \"%d\", int($used / 5) * 5}")
now=$(date +%s)

# Read previous sample from state file.
prev_time="" ; prev_used=""
if [ -f "$STATE" ]; then
  prev_time=$(cut -d',' -f1 "$STATE" 2>/dev/null)
  prev_used=$(cut -d',' -f2 "$STATE" 2>/dev/null)
fi

# Only update state file when the displayed threshold changes (every 5%).
prev_threshold=$(awk "BEGIN {printf \"%d\", int(${prev_used:-0} / 5) * 5}" 2>/dev/null)
if [ "$threshold" != "$prev_threshold" ] || [ -z "$prev_time" ]; then
  printf '%s,%s\n' "$now" "$used" > "$STATE"
fi

# Estimate time left using linear rate between last threshold crossing and now.
time_str=""
if [ -n "$prev_time" ] && [ -n "$prev_used" ]; then
  elapsed=$(( now - prev_time ))
  delta=$(awk "BEGIN {printf \"%.2f\", $used - $prev_used}")
  # Only estimate if context is actually growing and we have meaningful elapsed time.
  valid=$(awk "BEGIN {print ($delta > 0.1 && $elapsed > 30) ? 1 : 0}")
  if [ "$valid" = "1" ]; then
    secs_left=$(awk "BEGIN {printf \"%d\", (100 - $used) / ($delta / $elapsed)}")
    if [ "$secs_left" -gt 0 ] && [ "$secs_left" -lt 86400 ]; then
      mins=$(( secs_left / 60 ))
      if [ "$mins" -lt 60 ]; then
        time_str=" | ~${mins}m left"
      else
        hrs=$(( mins / 60 ))
        rm=$(( mins % 60 ))
        time_str=" | ~${hrs}h ${rm}m left"
      fi
    fi
  fi
fi

# Urgency indicator when above 80%.
used_int=$(awk "BEGIN {printf \"%d\", $used}")
if   [ "$used_int" -ge 95 ]; then warn=" !!!"
elif [ "$used_int" -ge 90 ]; then warn=" !!"
elif [ "$used_int" -ge 80 ]; then warn=" !"
else warn=""
fi

printf 'ctx: %d%%%s%s' "$threshold" "$time_str" "$warn"
