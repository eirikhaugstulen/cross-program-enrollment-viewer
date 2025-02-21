# Cross-Program Enrollment Viewer

## Introduction
This plugin extends the core functionality of DHIS2 tracker applications by providing cross-program enrollment visibility. It enables users to see and access enrollments across different programs for the same tracked entity.

## Purpose
In DHIS2 tracker applications, individuals (tracked entities) can be enrolled in multiple programs simultaneously. However, when working within one program, it's not immediately apparent what other programs the individual is enrolled in. This plugin bridges that gap by displaying this crucial information.

## Key Features
- Automatically detects and displays other program enrollments for the current tracked entity
- Provides direct links to access these related program enrollments
- Seamlessly integrates into the existing tracker interface
- Enhances program coordination and data visibility

## Use Case Example
When a health worker is viewing a patient's record in Program A (e.g., a maternal health program), the plugin will show if the same patient is also enrolled in Program B (e.g., an HIV treatment program). This cross-program visibility helps healthcare workers provide more coordinated and informed care.

## Technical Integration
The plugin operates as a standalone application that can be embedded within DHIS2 tracker applications. It leverages the DHIS2 Web API to fetch enrollment data and presents it in an easily accessible format within the user interface.

