/**
 * Stand-in for a real backend. Forms await this, so connecting an API later
 * only means replacing these calls.
 */
export function simulateRequest(delay = 1500) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
