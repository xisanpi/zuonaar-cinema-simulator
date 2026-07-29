#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$project_dir"

port="3000"
health_url="http://127.0.0.1:${port}/"

if curl --silent --fail --max-time 2 "$health_url" >/dev/null 2>&1; then
  echo "项目已经在 ${health_url} 运行。"
  exit 1
fi

child_pid=""

cleanup() {
  if [[ -n "$child_pid" ]] && kill -0 "$child_pid" 2>/dev/null; then
    kill "$child_pid" 2>/dev/null || true
    wait "$child_pid" 2>/dev/null || true
  fi
}

trap cleanup EXIT INT TERM

npm run dev &
child_pid="$!"
wait "$child_pid"

