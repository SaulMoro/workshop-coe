#!/usr/bin/env bash
# Comprueba que una lista tiene su estado vacío.
# Uso:  check-empty.sh <fichero de la lista>
# Cada fallo va a stderr y el script sale con 2. Si todo está bien, escribe
# «ok: …» en stdout y sale con 0. Se ejecuta desde la raíz del repositorio.
set -u

file="${1:?Indica el fichero de la lista}"
if [ ! -f "$file" ]; then
  echo "No existe $file" >&2
  exit 2
fi

fail=0
grep -q "EmptyState" "$file" || { echo "Falta EmptyState en $file" >&2; fail=1; }
grep -Eq "length === 0|length == 0|\.length\)" "$file" || { echo "$file no comprueba si la lista está vacía" >&2; fail=1; }
grep -q 'role="status"' src/shared/ui/EmptyState.tsx 2>/dev/null || { echo "Falta src/shared/ui/EmptyState.tsx con role=\"status\"" >&2; fail=1; }

if [ "$fail" -eq 0 ]; then
  echo "ok: estado vacío en $file"
fi
exit $(( fail * 2 ))
