# DHIS2 Cross-Program Enrollment Viewer Plugin

## Overview

The Cross-Program Enrollment Viewer is a DHIS2 plugin that enhances tracker applications by providing cross-program enrollment visibility. It solves a critical workflow challenge by enabling users to see and access enrollments across different programs for the same tracked entity, improving coordination and data visibility in healthcare settings.

### Key Features

- **Cross-Program Visibility**: Automatically detects and displays other program enrollments for the current tracked entity
- **Direct Navigation**: Provides quick access links to related program enrollments
- **Seamless Integration**: Integrates naturally into the existing DHIS2 tracker interface
- **Enhanced Coordination**: Facilitates better program coordination through improved data visibility

### Use Case Example

A health worker viewing a patient's record in a maternal health program can instantly see if the same patient is enrolled in other programs (e.g., HIV treatment program). This cross-program visibility enables healthcare workers to provide more coordinated and informed care.

## Technical Details

This project is built with the [DHIS2 Application Platform](https://github.com/dhis2/app-platform) and operates as a standalone application that can be embedded within DHIS2 tracker applications. It leverages the DHIS2 Web API to fetch and display enrollment data.

## Getting Started

### Prerequisites

- Node.js and yarn package manager
- Access to a DHIS2 instance
- Appropriate user permissions in DHIS2

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   yarn install
   ```

### Available Scripts

#### Development
```bash
yarn start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
The page will automatically reload on edits, and lint errors will appear in the console.

#### Testing
```bash
yarn test
```
Launches the test runner and executes all tests in `/src`.

#### Building
```bash
yarn build
```
Creates a production build in the `build` folder, with optimized and minified bundles.
The deployable `.zip` file will be available in `build/bundle`.

#### Deployment
```bash
yarn deploy
```
Deploys the built app to a DHIS2 instance. Requires:
- Prior execution of `yarn build`
- DHIS2 server URL
- Username and password of a DHIS2 user with App Management authority

## Learn More

- [DHIS2 Application Platform Documentation](https://platform.dhis2.nu/)
- [DHIS2 Application Runtime Documentation](https://runtime.dhis2.nu/)
- [React Documentation](https://reactjs.org/)

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests.

## License

This project is licensed under the BSD-3-Clause License.
