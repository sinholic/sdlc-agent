"use strict";

function createLogger(context = {}) {
  function log(level, message, fields = {}) {
    const record = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...context,
      ...fields
    };
    process.stdout.write(`${JSON.stringify(record)}\n`);
  }

  return {
    debug: (message, fields) => log("DEBUG", message, fields),
    info: (message, fields) => log("INFO", message, fields),
    warn: (message, fields) => log("WARN", message, fields),
    error: (message, fields) => log("ERROR", message, fields)
  };
}

module.exports = { createLogger };
