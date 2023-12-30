Feature: Mobile App test scenarios

    Scenario: Verify the Newspaper edition is downloadable.
        Given User launch the app
        And press continue
        And scroll down to Recent issues on Newspaper tab and tap on `See more`
        And sign in with valid credentials
        Then edition is downloaded

    Scenario: Verify the Images on Gallery section
        Given user viewing the downloaded edition        
        When user opens Gallery view and traverse through all gallery images
        Then on last image user close the image by clicking on Close button to return to ALB