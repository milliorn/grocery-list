/**
 * Lazily loads and returns the SweetAlert2 default export.
 * Centralizes the dynamic import so all alert calls share one module reference,
 * keeping sweetalert2 (~135 KiB) out of the initial bundle and only fetching
 * it the first time a notification or dialog is triggered.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getSwal() {
  return import("sweetalert2").then(({ default: module }) => module)
}
