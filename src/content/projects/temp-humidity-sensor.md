---
title: Temperature and Humidity Sensor
description: A project to monitor temperature and humidity readings. Data is sent to a server by UDP.
sortOrder: 1
year: 2024
technologies:
  - C
  - ESP32
  - FreeRTOS
  - Networking
  - UDP
links:
  repository: https://github.com/CategoryCory/TempHumiditySensorProject
---

![Close-up of an electronics development board](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85)

## Project History and Development

Reading from a sensor is a fairly straightforward embedded project, but I wanted to take this project in more of a fullstack/IoT direction. With the requirement to have WiFi connectivity, I decided to use the [ESP32-S3 DevkitC-1](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/hw-reference/esp32s3/user-guide-devkitc-1.html). This is a capable microcontroller with a 32-bit dual-core Xtensa processor and built-in 802.11 b/g/n WiFi module. For the sensor, I used the [AHT20 I2C temperature/humidity sensor](https://www.adafruit.com/product/5183).

The code was written in C using the [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/index.html) framework, which includes [FreeRTOS](https://www.freertos.org/index.html). For those of you familiar with FreeRTOS but not with ESP-IDF, you may notice a few differences, as the ESP32 uses a slightly modified version of FreeRTOS. There are two tasks--one reads from the sensor and stores the reading in a queue, and the other retrieves data from the queue, encodes it using [CBOR](https://cbor.io/), and sends it to a server through a UDP socket. I considered using a JSON encoding and sending the data to a REST API endpoint directly, but sending CBOR over UDP resulted in code that was both simpler and more lightweight.

## Future Plans

As it currently is, this project is designed primarily to work with one sensor. I would like to expand it to be more flexible, and to work with multiple sensors to gather additional environmental data, such as air pressure and quality.

Another improvement would be to add local storage using an SD card. The main motivation for this is to add resiliency in the event that the WiFi connection is lost. Once reconnected, then data saved on the SD card that has not yet been uploaded can be sent to the server.

Adding a small display would help to provide a real-time data visualization interface.

Specific to the code, I plan to look into using the [FreeRTOS + TCP](https://www.freertos.org/FreeRTOS-Plus/FreeRTOS_Plus_TCP/index.html) library to handle the UDP socket connection, rather than the base socket.h library.
