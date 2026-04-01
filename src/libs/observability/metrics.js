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

  toPrometheus(prefix = "sdlc_agent") {
    const lines = [];

    for (const [name, value] of this.counters.entries()) {
      const metric = `${prefix}_${name}`.replace(/[^a-zA-Z0-9_:]/g, "_");
      lines.push(`# TYPE ${metric} counter`);
      lines.push(`${metric} ${value}`);
    }

    for (const [name, values] of this.histograms.entries()) {
      const metric = `${prefix}_${name}`.replace(/[^a-zA-Z0-9_:]/g, "_");
      const count = values.length;
      const sum = values.reduce((acc, v) => acc + v, 0);
      const min = count > 0 ? Math.min(...values) : 0;
      const max = count > 0 ? Math.max(...values) : 0;

      lines.push(`# TYPE ${metric}_count gauge`);
      lines.push(`${metric}_count ${count}`);
      lines.push(`# TYPE ${metric}_sum gauge`);
      lines.push(`${metric}_sum ${sum}`);
      lines.push(`# TYPE ${metric}_min gauge`);
      lines.push(`${metric}_min ${min}`);
      lines.push(`# TYPE ${metric}_max gauge`);
      lines.push(`${metric}_max ${max}`);
    }

    return `${lines.join("\n")}\n`;
  }
}

module.exports = { MetricsRegistry };
