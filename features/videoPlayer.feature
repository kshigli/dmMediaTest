Feature: Video player 

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