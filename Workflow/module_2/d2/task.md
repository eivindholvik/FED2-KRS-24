# Create an app with tests

In this assignment, you will create a JavaScript application that simulates user authentication, posting, and fetching posts. You will set up a testing framework for your application and write tests to ensure the functionality works correctly.

> this assignment will use the soical endpoint at the Noroff API

## Required

Node.js version 18 is required for fetching in node-environment

```
node -v
```

## Environment Setup

1. Initiate the project and git. Rememer to accept ES6 modules in the node.js environment
1. Create a .env file and install the correct dependency
1. Add to .env:

- username
- password
- JWT

1. Set up the environment secrets in the Github repo

## Set up funtions to test

- Create a js module for logging in
- Create a js module for fetching posts
- Create a js module for creating posts
- Create a js test file for each module

### Test funtions:

- Log in with username and password from env
- fetches posts with token from env
- create errors if functions dont work

> one file should run all tests. Split up each test into ES6 modules.

## run on github actions

Create a workflow YAML file that runs when code is pushed to main.
