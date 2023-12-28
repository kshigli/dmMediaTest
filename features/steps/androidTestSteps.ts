import { Given, When, Then } from '@cucumber/cucumber';
import { androidPage } from '../../pages/androidPage';

const android = new androidPage();

Given(/^User launch the app$/, {}, async () => {  
    await android.launchApp()
});

Given(/^user viewing the downloaded edition$/, {}, async () => {  
    //no need to implement as the user is already viewing the edition
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

When(/^user opens Gallery view and traverse through all gallery images$/, {}, async () => {   
    await android.openGalleryView();
});

Then(/^on last image user close the image by clicking on Close button to return to ALB$/, {}, async () => {   
    await android.closeImage();
});