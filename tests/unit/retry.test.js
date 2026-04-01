"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { runWithRetry } = require("../../src/libs/reliability/retry");

test("runWithRetry retries then succeeds", async () => {
  let count = 0;
  const value = await runWithRetry(async () => {
    count += 1;
    if (count < 3) {
      throw new Error("transient");
    }
    return "ok";
  }, { maxAttempts: 3, baseDelayMs: 1 });

  assert.equal(value, "ok");
  assert.equal(count, 3);
});

test("runWithRetry throws after max attempts", async () => {
  let count = 0;
  await assert.rejects(
    runWithRetry(async () => {
      count += 1;
      throw new Error("boom");
    }, { maxAttempts: 2, baseDelayMs: 1 }),
    /boom/
  );

  assert.equal(count, 2);
});
