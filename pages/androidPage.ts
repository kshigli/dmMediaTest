const swipePercentages = {
    UP: {
        fromX: 50, toX: 50, fromY: 80, toY: 30
    },
    DOWN: {
        fromX: 50, toX: 50, fromY: 30, toY: 80
    },
    LEFT: {
        fromX: 90, toX: 20, fromY: 50, toY: 50
    },
    RIGHT: {
        fromX: 20, toX: 90, fromY: 50, toY: 50
    }
};

export class androidPage {

    async launchApp(){
        await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup').click();
        await new Promise(f => setTimeout(f, 5000));
       }

    async clickCont(){
        await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup').click();
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 2000)); 
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 2000)); 
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 2000)); 
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 2000)); 
        await $('//android.widget.TextView[@text="Continue"]').click();
        await new Promise(f => setTimeout(f, 2000));
    }

    async singIn(){ 
        await $('//android.widget.EditText[@resource-id="login.email"]').setValue('');       
        await $('//android.widget.EditText[@resource-id="login.email"]').setValue('mailqatest94@gmail.com');
        await new Promise(f => setTimeout(f, 2000));
        await $('//android.widget.EditText[@resource-id="login.password"]').setValue('World123!');
        await new Promise(f => setTimeout(f, 2000));
        await $('//android.widget.Button[@text="Sign in"]').click();
        await new Promise(f => setTimeout(f, 10000));
    }

    async waitForeditionToDownload(){        
        await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup').click();
        await new Promise(f => setTimeout(f, 3000));
    }

    async browseSeeMoreOnNewspaperTab(){        
       await this.swipeToElement(`//android.widget.TextView[@text="Recent issues"]`, 1,80, 20,80, 20)
       await this.swipeRightToElement('//android.widget.TextView[@text="SEE MORE"]//ancestor::android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup',4,90,20)        
        const seeMore = await $('//android.widget.TextView[@text="SEE MORE"]');       
        await seeMore.click();        
        const archive = await $('//android.widget.TextView[@text="Archive"]');
        await archive.click();        
        await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView').click();        
        await new Promise(f => setTimeout(f, 3000));
        await $('//android.widget.TextView[@text="Sign in"]').click();
        await new Promise(f => setTimeout(f, 3000));
    }

    async openGalleryView(){     
        await $('//android.widget.TextView[@text="NotWorking"]').click();
        await new Promise(f => setTimeout(f, 2000));
        await $('//androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout').click();
        await new Promise(f => setTimeout(f, 2000));
        await $('android=new UiScrollable(new UiSelector()).setAsHorizontalList().scrollTextIntoView("Leaving: Kirsty Walk will go after general election")');
        await new Promise(f => setTimeout(f, 2000));
        await $('//android.widget.Image[@text="Leaving: Kirsty Walk will go after general election "]').click();
        await new Promise(f => setTimeout(f, 2000)); 
        await $('android=new UiScrollable(new UiSelector()).setAsHorizontalList().scrollTextIntoView("Presenter")');        
        
    }

    async closeImage(){
        await $('//android.widget.TextView[@text="Close"]').click(); 
    }

    async swipePage(startPercentX : any, endPercentX: any, startPercentY: any, endPercentY: any, wait = 200) {
        const {width, height} = await driver.getWindowSize();
        const startXPoint = width * startPercentX / 100;
        const endXPoint = width * endPercentX / 100;
        const startYPoint = height * startPercentY / 100;
        const endYPoint = height * endPercentY / 100;
        await browser.touchPerform([
            {
                action: 'press',
                options: {
                    x: startXPoint,
                    y: startYPoint
                }
    },
    {
                action: 'wait',
                options: {
                    ms: wait
                }
    },
    {
                action: 'moveTo',
                options: {
                    x: endXPoint,
                    y: endYPoint
                }
},
            {
                action: 'release',
                options: {}
            }
        ]);
    }

    /* swipe to element until its displayed */
    async swipeToElement(locator: string, numberOfSwipes = 1, startXPercentage : any, endXPercentage: any, startYPercentage: any, endYPercentage: any) {
        let isLocDisplayed = await $(locator).isDisplayed()
                let count = 0;
        while (!isLocDisplayed && count < numberOfSwipes) {
            count++;
            await this.swipePage(startXPercentage, endXPercentage, startYPercentage, endYPercentage);
            isLocDisplayed = await $(locator).isDisplayed()
        }       
    }

    /* swipe horizontally */
    async swipeRightToElement(locator: string, numberOfSwipesToCheck = 1, startPoint = swipePercentages.RIGHT.fromX, endPoint = swipePercentages.RIGHT.toX) {
        await this.swipeToElement(locator, numberOfSwipesToCheck, startPoint, endPoint, swipePercentages.RIGHT.fromY, swipePercentages.RIGHT.toY);
    }
}