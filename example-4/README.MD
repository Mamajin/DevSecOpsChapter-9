# Example-4

This example demonstrates end to end testing a microservice with Playwright.
It includes automated CI/CD pipeline using GitHub Actions for continuous testing.

## Prerequisites
- Docker and Docker Compose
- Node.js 18 or higher

## Getting Started

First you must boot the microservices application:

```bash
docker-compose up --build
```

Now install dependencies for testing:

```bash
cd example-4
npm install
npm install playwright
```

Then run headless Playwright tests:

```bash
npm test
```

Or to show the Playwright test UI:

```bash
npm run test:watch
```