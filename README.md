# NgFormBuilderApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Dockerization

This project includes Docker support for containerizing the Angular application. The Docker setup allows you to build and run the application in a consistent environment.

### Docker Commands

- **Build Docker Image**: Run `npm run docker:build` to build the Docker image for the application.
- **Run Docker Container**: Run `npm run docker:run` to start the application in a Docker container using Docker Compose. The application will be available at `http://localhost:4200/`.
- **Stop Docker Container**: Run `npm run docker:stop` to stop the running Docker container.

### Dockerfile

The `Dockerfile` is used to build the Docker image for the Angular application. It performs the following steps:

1. Uses the Node.js 20 image as the base image.
2. Sets the working directory to `/usr/src/app`.
3. Copies the `package.json` and `package-lock.json` files to the working directory.
4. Installs the project dependencies.
5. Installs the Angular CLI globally.
6. Copies the rest of the application code to the working directory.
7. Builds the Angular application.
8. Uses the Nginx image to serve the built application.
9. Copies the built application from the Node.js image to the Nginx image.
10. Exposes port 80 for the Nginx server.

### docker-compose.yaml

The `docker-compose.yaml` file is used to define and run multi-container Docker applications. It includes the following service:

- **ng-form-builder-app**: Builds and runs the Angular application using the Dockerfile. It maps port 4200 on the host to port 80 in the container.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
