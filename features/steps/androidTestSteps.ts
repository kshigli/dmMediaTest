import { Given, When, Then } from '@cucumber/cucumber';
import { androidPage } from '../../pages/androidPage';

const android = new androidPage();

Given(/^User launch the app$/, {}, async () => {  
    await android.launchApp()
});

When(/^press continue$/, {}, async () => {   
    await android.clickCont();    
});

When(/^scroll down to Recent issues on Newspaper tab and tap on `See more` button$/, {}, async () => {   
    await android.browseSeeMoreOnNewspaperTab()
});

When(/^sign in with valid credentials$/, {}, async () => {   
    await android.singIn();
});

Then(/^edition is downloaded$/, {}, async () => {   
    await android.waitForeditionToDownload();
});