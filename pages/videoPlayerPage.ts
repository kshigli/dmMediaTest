import { waitForDisappeared, waitForDisplayed } from '../utils/helper';

const videoPlayButton = '//div[@id="vjs_video_3"]/div[@class="vjs-big-play-button"]';
const slider = '//div[@id="vjs_video_3"]//div[@class="vjs-seek-handle vjs-slider-handle"]';
const cookieButton = '//button[contains(text(),"Got it")]';
const videoPlayPauseButton = '//div[@id="vjs_video_3"]//div[@class="vjs-control-bar"]/descendant::div[contains(@class,"vjs-play-control")]';
const forwardButton = '//div[@class="vjs-control-bar"]/div[contains(@class,"mol-skip-control")]';
const backButton = '//div[@class="vjs-control-bar"]/div[contains(@class,"mol-previous-control")]';
const muteButton = '//div[@class="vjs-control-bar"]/div[contains(@class,"volume-menu-button")]';
const videoFinPlayButton = '//div[@id="vjs_video_3"]//div[@class="vjs-control-bar"]/descendant::div[contains(@class,"vjs-play-control")]/descendant::span[text()="Play"]';
const sportMenuButton = '//ul[contains(@data-track-module,"nav-primary")]/descendant::a[text()="Sport"]';
const videoAd = '//div[@class="video-ads-placeholder"][contains(@style,"display: block;")]';
 
export class videoPlayerPage {

    async clickPlayButton() {
        const playButton = await $(videoPlayButton);
        await waitForDisplayed(playButton);  
        await playButton.click();       
    }

    async clickPlayPauseButton() {
        const playPauseButton = await $(videoPlayPauseButton);
        const videoAdPlaceholder = await $(videoAd);
        await waitForDisplayed(playPauseButton);
        
            try {
                await waitForDisappeared(videoAdPlaceholder); 
            } catch (error) {
                console.warn(
                    'click failed on element:',
                    videoAdPlaceholder,
                    error
                );
            } 
        
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
        if(await cookieAcceptButton.isDisplayed) {
            await waitForDisplayed(cookieAcceptButton);
            await cookieAcceptButton.click(); 
        } 
    }

    async clickForwardArrowButton() {
        const forwardControlButton = await $(forwardButton);
        const videoAdPlaceholder = await $(videoAd);
        const sliderBar = await $(slider);
        try {
            await waitForDisappeared(videoAdPlaceholder); 
        } catch (error) {
            console.warn(
                'click failed on element:',
                videoAdPlaceholder,
                error
            );
        }
        try {
            await forwardControlButton.click();
        } catch (error) {
            console.warn(
                'click failed on element:',
                forwardControlButton,
                error
            );
        }          
        await waitForDisplayed(sliderBar);  
          
    }

    async clickBackArrowButton() {
        const backControlButton = await $(backButton);
        const videoAdPlaceholder = await $(videoAd);
        const sliderBar = await $(slider);
        try {
            await waitForDisappeared(videoAdPlaceholder); 
        } catch (error) {
            console.warn(
                'click failed on element:',
                videoAdPlaceholder,
                error
            );
        }
        try {
            await backControlButton.click();
        } catch (error) {
            console.warn(
                'click failed on element:',
                backControlButton,
                error
            );
        }
           
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
        try {
            await waitForDisappeared(videoFinish); 
        } catch (error) {
            console.warn(
                'click failed on element:',
                videoFinish,
                error
            );
        }
             
    }

    async clickSportMenu() {
        const sportMenu = await $(sportMenuButton);
        await waitForDisplayed(sportMenu);   
        await sportMenu.click();  
    }
}