"use strict";

function nowMs() {
  return Date.now();
}

function createLease(ttlMs) {
  const start = nowMs();
  return {
    claimedAtMs: start,
    leaseUntilMs: start + ttlMs,
    ttlMs
  };
}

function isExpired(lease, timestamp = nowMs()) {
  return timestamp > lease.leaseUntilMs;
}

function heartbeat(lease, ttlMs = lease.ttlMs) {
  return {
    ...lease,
    leaseUntilMs: nowMs() + ttlMs,
    ttlMs
  };
}

module.exports = { createLease, isExpired, heartbeat };
