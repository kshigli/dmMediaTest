import path from "path";

export const config = {
   
 //   runner: 'local',
    user: process.env.BROWSERSTACK_USERNAME || 'mailqatest_cXsLbu',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'TEPExGhJQfYqSq4qteYf',
    hostname: 'hub.browserstack.com',
//    port: 4724,
    specs: [
        [
             './features/**/androidTest.feature'
           
        ]
    ],
    
    capabilities: [
        {
            platformName: "android",
            "appium:deviceName": "OnePlus 9",
            "appium:platformVersion": "11.0",
            "appium:automationName": "UIAutomator2",
            "appium:app": path.join(process.cwd(), "./app/android/8.2.2.20 (744802).apk"),
            "appium:autoGrantPermissions": true
        }
    ],

    
    bail: 1,
    maxInstances: 1,

    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/steps/*.ts'],
        timeout: 180000
    },
    services: [
        [
          'browserstack',
          {
            app: './app/android/8.2.2.20 (744802).apk',
            buildIdentifier: "${BUILD_NUMBER}",
            browserstackLocal: true
          },
        ]
      ],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    },

    
    reporters: [
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
                timeout: 180000
            }
        ],
        ['spec', []]
    ],


    afterStep: async function (
        _details: any,
        _context: any,
        { error, result, duration, passed, retries }: any
    ) { 
        if (error){
            await browser.takeScreenshot(); 
        }
                   
    }
};
