# DMGMedia tests for Web And Mobile

## Pre-requistes
1. Make sure yarn is installed locally
2. A valid Browserstack account with both `Web - Automate` and `App - App Automate` features enabled

## Test execution
1. Checkout the entire code a local folder
2. Install the packages using yarn

## Web test execution
1. Open terminal and navigate to the root directory this code
2. Run `yarn web` to trigger web test

## Mobile test execution
1. Open terminal and navigate to the root directory this code
2. Run `yarn mobile` to trigger mobile test

## Reporting
Use this command to genrate allure reports upon test execution.
`allure generate ./allure-results && allure open`


