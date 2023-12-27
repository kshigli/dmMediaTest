import path from "path";

export const config = {
   
    runner: 'local',
    user: 'mailqatest_cXsLbu',
    key: 'TEPExGhJQfYqSq4qteYf',
    hostname: '0.0.0.0',
    port: 4724,
    specs: [
        [
             './features/**/androidTest.feature'
           
        ]
    ],
    
    capabilities: [
        {
            platformName: "Android",
            "appium:deviceName": "emulator-5554",
            "appium:platformVersion": "12.0",
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
            'appium',
            {
                args: {
                },
                command: 'appium'
            }
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
