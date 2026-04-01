"use strict";

const STAGES = ["BRIEF", "PRD", "DESIGN", "TECHDOC", "TICKETS", "ENGINEERING", "REVIEW", "DONE"];

class WorkflowEngine {
  constructor({ workflowId, logger, metrics }) {
    this.workflowId = workflowId;
    this.logger = logger;
    this.metrics = metrics;
    this.state = { stage: "BRIEF", status: "IDLE" };
  }

  transition(nextStage, details = {}) {
    const currentIndex = STAGES.indexOf(this.state.stage);
    const nextIndex = STAGES.indexOf(nextStage);
    if (nextIndex === -1) {
      throw new Error(`Invalid stage: ${nextStage}`);
    }
    if (nextIndex < currentIndex) {
      throw new Error(`Invalid backward transition: ${this.state.stage} -> ${nextStage}`);
    }

    const from = this.state.stage;
    this.state = {
      ...this.state,
      stage: nextStage,
      status: nextStage === "DONE" ? "COMPLETED" : "RUNNING",
      updatedAt: new Date().toISOString(),
      details
    };

    this.metrics.increment("workflow_transition_total", 1);
    this.logger.info("workflow.transition", {
      workflow_id: this.workflowId,
      from_stage: from,
      to_stage: nextStage
    });
  }

  getState() {
    return this.state;
  }
}

module.exports = { WorkflowEngine, STAGES };
