"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { InMemoryNotionQueue } = require("../../src/adapters/notion/notion-queue");
const { processNextTicket } = require("../../src/workers/engineer-worker");
const { createLogger } = require("../../src/libs/observability/logger");
const { MetricsRegistry } = require("../../src/libs/observability/metrics");

test("engineer worker claims and moves ticket to Review", async () => {
  const queue = new InMemoryNotionQueue([
    { id: "ENG-10", workflowId: "wf-10", title: "task", status: "Ready", createdAt: "2026-04-01T00:00:00.000Z" }
  ]);

  const result = await processNextTicket({
    queue,
    workerId: "w-1",
    logger: createLogger({ test: true }),
    metrics: new MetricsRegistry(),
    executeTicket: async () => ({ ok: true })
  });

  assert.equal(result.handled, true);
  assert.equal(result.status, "Review");
});

test("engineer worker marks Failed after retries exhausted", async () => {
  const queue = new InMemoryNotionQueue([
    { id: "ENG-11", workflowId: "wf-11", title: "task", status: "Ready", retryCount: 0, createdAt: "2026-04-01T00:00:00.000Z" }
  ]);

  const result = await processNextTicket({
    queue,
    workerId: "w-2",
    logger: createLogger({ test: true }),
    metrics: new MetricsRegistry(),
    maxRetry: 2,
    executeTicket: async () => {
      throw new Error("fatal");
    }
  });

  assert.equal(result.handled, true);
  assert.equal(result.status, "Failed");
});
