"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { WorkflowEngine } = require("../../src/orchestrator/workflow-engine");
const { createLogger } = require("../../src/libs/observability/logger");
const { MetricsRegistry } = require("../../src/libs/observability/metrics");

test("workflow engine transitions forward", () => {
  const workflow = new WorkflowEngine({
    workflowId: "wf-1",
    logger: createLogger({ test: true }),
    metrics: new MetricsRegistry()
  });

  workflow.transition("PRD");
  workflow.transition("DESIGN");
  assert.equal(workflow.getState().stage, "DESIGN");
});

test("workflow engine rejects backward transitions", () => {
  const workflow = new WorkflowEngine({
    workflowId: "wf-2",
    logger: createLogger({ test: true }),
    metrics: new MetricsRegistry()
  });

  workflow.transition("PRD");
  assert.throws(() => workflow.transition("BRIEF"), /Invalid backward transition/);
});
