---
title: Signal Harbor
description: A local-first service that collects environmental sensor readings, validates them at the edge, and makes the data useful without depending on the cloud.
sortOrder: 1
year: 2026
technologies:
  - C#
  - .NET 10
  - PostgreSQL
  - MQTT
  - Raspberry Pi
links:
  repository: https://github.com/CategoryCory/signal-harbor
---

![Close-up of an electronics development board](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85)

## Context

Signal Harbor is a dummy case study for a local sensor platform. Its aim is deliberately practical: accept readings from small devices, keep useful history close to home, and make failures obvious rather than mysterious.

The design treats the network as unreliable. Devices batch readings when disconnected, the service validates messages before persistence, and operators can inspect the last known state for every node.

## Build log

### Ingestion path

The first milestone established a small MQTT ingestion service with a versioned message envelope. Invalid messages are retained in a dead-letter stream so a firmware change does not silently erase useful diagnostics.

### Storage and reporting

The second pass added PostgreSQL storage optimized for time-range queries and a compact status endpoint for the local dashboard. The schema keeps raw values alongside normalized measurements so transformations remain auditable.

### Next steps

The planned follow-up is a configuration workflow for adding new nodes without rebuilding firmware, plus an export format for longer-term analysis.