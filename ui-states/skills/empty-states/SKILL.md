---
name: empty-states
description: Show an empty state when a list has no items, with the shared EmptyState component. Use when a task asks for an empty state or a "no results" or "no data" message in a list.
---

# Empty states

This is our team's pattern for a list that has no items.

1. When the list has no items, render `EmptyState` from `src/shared/ui/EmptyState.tsx` instead of an empty `<ul>`. If it is missing, copy it from [assets/EmptyState.tsx](assets/EmptyState.tsx).
2. The check lives in the list component, right after reading the data: `if (items.length === 0) return <EmptyState … />`.
3. Give it a `title` that names what is missing, such as "Todavía no hay pedidos", and a `hint` with what will make it appear.
4. When you finish, run [scripts/check-empty.sh](scripts/check-empty.sh) `<list file>` from the repository root and fix what it reports.
