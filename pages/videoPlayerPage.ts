import { waitForDisplayed } from '../utils/helper';

const videoPlayButton = '//div[@id="vjs_video_3"]/div[@class="vjs-big-play-button"]';
const cookieButton = '//button[contains(text(),"Got it")]';
const videoPlayPauseButton = '//div[@id="vjs_video_3"]//div[@class="vjs-control-bar"]/descendant::span[text()="Play" or text()="Pause"]';

let value: string;
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
        await cookieAcceptButton .click();       
    }
}