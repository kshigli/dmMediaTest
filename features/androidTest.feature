Feature: Verify the Newspaper edition is downloadable

    Scenario: Download Newspaper
        Given User launch the app
        And press continue
        And scroll down to Recent issues on Newspaper tab and tap on `See more` button
        And sign in with valid credentials
        Then edition is downloaded