
# API Testing Using Cypress
It's important to test APIs along with E2E UI tests, and it can also be helpful to stabilize APIs and prepare data to interact with third-party servers.

Cypress provides the functionality to make an HTTP request.

Using Cypress’s Request() method, we can validate GET, POST, PUT, and DELETE API Endpoints.
## Cypress Reporting
Reporter options can be specified in the cypress.json configuration file or via CLI options. Cypress supports the following reporting capabilities:

Mocha Built-in Reporting - As Cypress is built on top of Mocha, it has the default Mochawesome reporting

### CLI Reporting:
npx cypress run --reporter mochawesome --spec ".\cypress\integration\api-test\lambda-api-test.js"