---
title: Temperature and Humidity Sensor Server
description: The C# server counterpart to the ESP32 temp and humidity project. Receives UDP message and saves data in a PostgreSQL database.
sortOrder: 1
year: 2024
technologies:
  - C#
  - .NET
  - Networking
  - UDP
links:
  repository: https://github.com/CategoryCory/TempHumidityDBBackend
---

![Close-up of an electronics development board](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85)

## Project History and Development

This project is the counterpart to the ESP32 temperature/humidity sensor project. This app is a C# (specifically, .NET 8) service worker app. It listens for UDP messages, and when one is received, it decodes the data (which is in [CBOR](https://cbor.io/) format) and sends it to a REST API endpoint that is hosted in this website. This project makes use of C#'s dependency injection and HttpClient features.

This app is hosted locally on my home network on a [Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/) running [Ubuntu 22.04](https://releases.ubuntu.com/jammy/), where it runs as a systemd background service.

## Future Plans

Like the ESP32 sensor project, this app is well-designed to receive messages that are encoded using CBOR, but a good future expansion would be to incorporate some method of detecting incoming message formats and decoding them as appropriate. In addition, another expansion that I'd like to make is to add multiple data handlers--this way, the app would be able to offer multiple ways to deal with data, such as saving locally to a database, sending data to a REST API endpoint, or some other method.
