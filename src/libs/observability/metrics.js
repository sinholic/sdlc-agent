"use strict";

class MetricsRegistry {
  constructor() {
    this.counters = new Map();
    this.histograms = new Map();
  }

  increment(name, value = 1) {
    const current = this.counters.get(name) || 0;
    this.counters.set(name, current + value);
  }

  observe(name, value) {
    const existing = this.histograms.get(name) || [];
    existing.push(value);
    this.histograms.set(name, existing);
  }

  snapshot() {
    return {
      counters: Object.fromEntries(this.counters),
      histograms: Object.fromEntries(this.histograms)
    };
  }
}

module.exports = { MetricsRegistry };
