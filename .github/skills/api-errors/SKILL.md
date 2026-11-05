---
name: api-errors
description: Show API errors the way this team does, with ErrorBanner and a retry. Use when a request handles a failed API call in a page or form.
---

# API errors

1. Wrap the part of the page that reads server data in `ApiErrorBoundary` from `src/shared/ui/ApiErrorBoundary.tsx`. Create it if it is missing, as a class error boundary.
2. Its fallback is always `ErrorBanner` from `src/shared/ui/ErrorBanner.tsx`, with the error message and `onRetry`.
3. Retrying clears the cached query of that feature (`reset…Query()`) and renders again.
4. Never show a raw error, an alert or an empty list instead of the banner.
