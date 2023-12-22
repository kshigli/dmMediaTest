export const waitForDisplayed = async (
    element: WebdriverIO.Element,
    timeout = 35000
) => {
    await element.waitForDisplayed({ timeout });
};

export const waitForDisappeared = async (
    element: WebdriverIO.Element,
    timeout = 30000
) => {
    await element.waitForExist({ timeout, reverse: true });
};