export const config = {
    runner: 'local',
    specs: [
        [
             './features/**/videoPlayer.feature'
           
        ]
    ],
    baseUrl: 'https://www.dailymail.co.uk/video/index.html',
    capabilities: [
        {
            bail: 1,
            maxInstances: 1,
            maxInstancesPerCapability: 1,
            browserName: 'chrome',
            acceptInsecureCerts: false,
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--disable-infobars',
                    '--start-maximized',
                    //'--headless=new',
                    '--disable-gpu',
                    //'--window-size=1440,735',
                    //'--disable-dev-shm-usage'
                ]
            }
        }
    ],

    
    bail: 1,
    maxInstances: 1,
    maxInstancesPerCapability: 1,

    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/steps/*.ts'],
        timeout: 180000
    },
    services: ['chromedriver'],
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
                timeout: 180000
            }
        ],
        ['spec', []]
    ],


    afterStep: async function (
        _details: any, // details
        _context: any,
        { error, result, duration, passed, retries }: any // result
    ) { 
        if (error){
            await browser.takeScreenshot(); 
        }
                   
    }
};
