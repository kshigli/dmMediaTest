import { Given, When, Then } from '@cucumber/cucumber';
import { waitForDisplayed } from '../../utils/helper';

import { videoPlayerPage } from '../../pages/videoPlayerPage';

const videoPlayer = new videoPlayerPage();

const challengingDOMLink = '//a[text()="Challenging DOM"]';
let buttonIdsBeforeClick: any;

Given(/^User Navigate to the Daily Mail Video Page$/, {}, async () => {  
    //const challengingDOMSelector = await $(challengingDOMLink);
    await browser.url('https://www.dailymail.co.uk/video/index.html');    
    //await waitForDisplayed(challengingDOMSelector);
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

