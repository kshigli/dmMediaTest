import { waitForDisappeared, waitForDisplayed } from '../utils/helper';

const videoPlayButton = '//div[@id="vjs_video_3"]/div[@class="vjs-big-play-button"]';
const slider = '//div[@id="vjs_video_3"]//div[@class="vjs-seek-handle vjs-slider-handle"]';
const cookieButton = '//button[contains(text(),"Got it")]';
const videoPlayPauseButton = '//div[@id="vjs_video_3"]//div[@class="vjs-control-bar"]/descendant::div[contains(@class,"vjs-play-control")]';
const forwardButton = '//div[@class="vjs-control-bar"]/div[contains(@class,"mol-skip-control")]';
const backButton = '//div[@class="vjs-control-bar"]/div[contains(@class,"mol-previous-control")]';
const muteButton = '//div[@class="vjs-control-bar"]/div[contains(@class,"volume-menu-button")]';
const videoFinPlayButton = '//div[@id="vjs_video_3"]//div[@class="vjs-control-bar"]/descendant::div[contains(@class,"vjs-play-control")]/descendant::span[text()="Play"]';


export class videoPlayerPage {

    async clickPlayButton() {
        const playButton = await $(videoPlayButton);
        await waitForDisplayed(playButton);  
        await playButton.click();       
    }

    async clickPlayPauseButton() {
        const playPauseButton = await $(videoPlayPauseButton);
        await waitForDisplayed(playPauseButton);
        
        try {
            await playPauseButton.click(); 
        } catch (error) {
            console.warn(
                'click failed on element:',
                playPauseButton,
                error
            );
        }
    }

    async clickCookieAcceptButton() {
        const cookieAcceptButton = await $(cookieButton);
        await waitForDisplayed(cookieAcceptButton);  
        await cookieAcceptButton.click();   
    }

    async clickForwardArrowButton() {
        const forwardControlButton = await $(forwardButton);
        const sliderBar = await $(slider);
        await waitForDisplayed(forwardControlButton); 
        await forwardControlButton.click();   
        await waitForDisplayed(sliderBar);  
        await new Promise(f => setTimeout(f, 3000));   
    }

    async clickBackArrowButton() {
        const backControlButton = await $(backButton);
        const sliderBar = await $(slider);
        await waitForDisplayed(backControlButton); 
        await backControlButton.click();   
        await waitForDisplayed(sliderBar);  
        await new Promise(f => setTimeout(f, 3000));   
    }

    async muteUnMuteVideoButton() {
        const muteVolumeButton = await $(muteButton);
        await waitForDisplayed(muteVolumeButton); 
        await muteVolumeButton.click();   
        await new Promise(f => setTimeout(f, 3000));   
    }

    async waitUntilVideoFinishes() {
        const videoFinish = await $(videoFinPlayButton);
        await waitForDisplayed(videoFinish);        
    }

    async waitUntilNextVideoPlay() {
        const videoFinish = await $(videoFinPlayButton);
        await waitForDisappeared(videoFinish);     
    }
}