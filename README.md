# Welcome to Project Starkiller!

This project was generated using [Nx](https://nx.dev). The goal of this project is to provide a sample application using a USWDS 3.0 based Design System which is built in React with TypeScript. The project contains a component library (called Starkiller), a storybook implementation of that library, and a sample React applicaton. Any updates made to the library will automatically be reflected in the sample application.

Note: the sample application is intended to provide a starting point for building apps using the USWDS react components.

## Getting Started

- `npm install` to install all project dependencies.
- `npm run storybook` to load up the Design System.
- `npm run start` to load up the sample application.

## Other Useful Commands

- `npm run test` to run unit tests on the library and sample application.
- `npm run lint` to run linting checks on the library and sample application.

## Next Steps

The following are a list of items that can be completed in order to further build out this application and learn along the way:

- [ ] Add Basic Footer to App
- [ ] Add Characters Dashboard Page (Page, Route, Data Table, Top Navigation)
- [ ] Add Character Details Page (Page, Route, Data View)
- [ ] Add Login Form (should allow any username and password combo, if not provided, provide form validation messaging)
- [ ] Add Search Functionality to Dashboard Page (note: this will require the addition of a new component to the library)
- [ ] Replace Prop Drilling state management with Redux
- [ ] Update to populate data using external starkiller-api

### Additional Notes

- Use Starkiller stories as code examples for component use.
- All standard components should come from the Starkiller library.
- Any standard components that are not currently available should be added to the library from USWDS.
- Don't forget to add unit tests for any new code.
