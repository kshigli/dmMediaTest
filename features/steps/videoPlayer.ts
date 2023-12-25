import { Given, When, Then } from '@cucumber/cucumber';
import { videoPlayerPage } from '../../pages/videoPlayerPage';

const videoPlayer = new videoPlayerPage();

Given(/^User Navigate to the Daily Mail Video Page$/, {}, async () => {  
    await browser.url('https://www.dailymail.co.uk/video/index.html');    
});

When(/^accept cookies$/, {}, async () => {    
    await videoPlayer.clickCookieAcceptButton();
});

When(/^user click on Video in page to begin playback$/, {}, async () => {    
    await videoPlayer.clickPlayButton();
});

When(/^user click video again to pause playback$/, {}, async () => {    
    await videoPlayer.clickPlayPauseButton();

});

When(/^user click on the forward arrow to change to the next video$/, {}, async () => {    
    await videoPlayer.clickForwardArrowButton();
});

When(/^user click on the back arrow to navigate to the previous video$/, {}, async () => {    
    await videoPlayer.clickBackArrowButton(); 
    await videoPlayer.clickPlayPauseButton();   
});

When(/^user click on the speaker icon to mute the video$/, {}, async () => {    
    await videoPlayer.muteUnMuteVideoButton();    
});

When(/^user click on the speaker icon again to unmute the video$/, {}, async () => {    
    await videoPlayer.muteUnMuteVideoButton();    
});

When(/^video is finished$/, {}, async () => {   
    await videoPlayer.clickPlayPauseButton(); 
    await videoPlayer.waitUntilVideoFinishes();
    await videoPlayer.waitUntilNextVideoPlay();
});

Then(/^next video should autoplay$/, {}, async () => {    
    await videoPlayer.waitUntilNextVideoPlay();
});