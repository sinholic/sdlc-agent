"use strict";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runWithRetry(fn, options = {}) {
  const {
    maxAttempts = 3,
    baseDelayMs = 100,
    factor = 2,
    isRetryable = () => true,
    onRetry = () => {}
  } = options;

  let attempt = 0;
  let delayMs = baseDelayMs;

  while (attempt < maxAttempts) {
    attempt += 1;
    try {
      return await fn(attempt);
    } catch (error) {
      if (attempt >= maxAttempts || !isRetryable(error)) {
        error.attempts = attempt;
        throw error;
      }
      onRetry({ attempt, delayMs, error });
      await sleep(delayMs);
      delayMs *= factor;
    }
  }

  throw new Error("Retry loop exited unexpectedly");
}

module.exports = { runWithRetry };
