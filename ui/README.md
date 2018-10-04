# Front-end test

This project was generated with [ngX-Rocket](https://github.com/ngx-rocket/generator-ngx-rocket/)
version 5.1.0

# Project structure

```
dist/                        web app production build
cypress/                     end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- ...
proxy.conf.js                backend proxy configuration
```

# Development

Run `yarn json-server` and `yarn start`. Use any username and password to sign in.

# Yarn tasks

| Task               | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `yarn start`       | Run development server on `http://localhost:4200/`                        |
| `yarn start:hmr`   | Run development server in HMR mode on `http://localhost:4200/`            |
| `yarn json-server` | Run [json-server](https://www.cypress.io/) on on `http://localhost:3000/` |
| `yarn lint`        | Run all the linters                                                       |
| `yarn test`        | Run unit tests via [jest](https://github.com/typicode/json-server)        |
| `yarn e2e`         | Run e2e tests using [cypress](https://www.cypress.io/)                    |
