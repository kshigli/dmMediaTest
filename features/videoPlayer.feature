Feature: Web App test scenarios

    Scenario: Verify the video player functionality
        Given User Navigate to the Daily Mail Video Page
        And accept cookies
        And user click on Video in page to begin playback
        And user click video again to pause playback
        And user click on the forward arrow to change to the next video
        And user click on the back arrow to navigate to the previous video
        And user click on the speaker icon to mute the video
        And user click on the speaker icon again to unmute the video
        When video is finished
        Then next video should autoplay

    Scenario: Get Position and Points for a given team
        Given User Navigate to the Daily Mail Page
        And user click on Sport menu and scroll down to the Premier League table
        And user click on the View all tables       
        Then Position & Points for a given team is retrieved
            | team        |
            | Man City    |