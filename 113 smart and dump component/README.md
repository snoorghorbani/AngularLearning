# ParentChildComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# smart and dumb component

We can spliting components in two type :

1. Smart Components :  sometimes as application-level components, container components or controller components
2. Dumb Components : sometimes as pure components or UI components

The example in this exerise is very frequent, we have the smart component inject the data to the dumb component via @Input, and receive any actions that the presentation component might trigger via @Output.

Using @Output the presentation component remains isolated from the smart component via a clearly defined interface:

- UI component only knows that it emitted an event, but does not know what are the receivers of the event or what will the receivers do in response to the event
- smart component subscribes custom event and reacts to the event, but it does not know what triggered the event.
