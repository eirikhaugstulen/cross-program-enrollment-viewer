# Cross-Program Enrollment Viewer

## Introduction

This plugin complements the standard functionality of DHIS2 tracker applications by presenting a unified view of enrollments across multiple programs for the same tracked entity.

## Purpose

In DHIS2, a single tracked entity can be enrolled in several programs. However, while working in one program, it may not be clear which other programs the entity is also enrolled in. The Cross-Program Enrollment Viewer addresses this issue by displaying these additional enrollments in an accessible way.

## Key Features
- Detects and lists other program enrollments for the tracked entity currently being viewed
- Provides direct navigation links to each related enrollment
- Integrates into the existing DHIS2 tracker interface for a consistent user experience
- Supports improved coordination and oversight of entity data across multiple programs

## Use Case Example

When a health worker is reviewing a patient’s record in a maternal health program, the plugin will indicate if the same patient is also enrolled in programs such as immunization or HIV treatment. This broader visibility can help healthcare providers coordinate care more effectively and ensure comprehensive data management.

## Technical Integration

The plugin functions as a standalone component within DHIS2 tracker applications. It leverages the DHIS2 Web API to retrieve enrollment data, then displays this information in a user-friendly manner within the tracker interface.

## Installation and Configuration

To use this plugin, follow these steps:
	1.	Download and install the Tracker Plugin Configurator app from the DHIS2 App Hub.
	2.	Open the Tracker Plugin Configurator app in your DHIS2 instance.
	3.	Configure the Cross-Program Enrollment Viewer as an enrollment widget within the app.

Once configured, the plugin will be available to provide cross-program enrollment visibility in your DHIS2 tracker applications.