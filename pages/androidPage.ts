import { waitForDisappeared, waitForDisplayed } from '../utils/helper';


const signIn = '//android.widget.TextView[@text="Sign in"]';

export class androidPage {

    async launchApp(){
        await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup').click();
        await new Promise(f => setTimeout(f, 5000)); 
    }

    async clickCont(){
        await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup').click();
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 3000)); 
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 3000)); 
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 3000)); 
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 3000)); 
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 3000));


        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Recent issues")')       
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("SEE MORE")') 
        // const seeMore = await $('//android.widget.TextView[@text="SEE MORE"]');       
        // await seeMore.click();        
        // const archive = await $('//android.widget.TextView[@text="Archive"]');
        // await archive.click();        
        // await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView').click();
        


        // await new Promise(f => setTimeout(f, 3000));
        // await $('//android.widget.TextView[@text="Sign in"]').click();
        // await new Promise(f => setTimeout(f, 3000));
    }

    async singIn(){        
        await $('//android.widget.EditText[@resource-id="login.email"]').setValue('mailqatest94@gmail.com');
        await new Promise(f => setTimeout(f, 3000));
        await $('//android.widget.EditText[@resource-id="login.password"]').setValue('World123!');
        await new Promise(f => setTimeout(f, 3000));
        await $('//android.widget.Button[@text="Sign in"]').click();
        await new Promise(f => setTimeout(f, 10000));
    }

    async waitForeditionToDownload(){        
        await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup').click();
        await new Promise(f => setTimeout(f, 3000));
    }

    async browseSeeMoreOnNewspaperTab(){        
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Recent issues")')       
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("SEE MORE")') 
        const seeMore = await $('//android.widget.TextView[@text="SEE MORE"]');       
        await seeMore.click();        
        const archive = await $('//android.widget.TextView[@text="Archive"]');
        await archive.click();        
        await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView').click();        
        await new Promise(f => setTimeout(f, 3000));
        await $('//android.widget.TextView[@text="Sign in"]').click();
        await new Promise(f => setTimeout(f, 3000));
    }
}