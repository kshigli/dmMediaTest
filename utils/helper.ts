export const waitForDisplayed = async (
    element: WebdriverIO.Element,
    timeout = 20000
) => {
    await element.waitForDisplayed({ timeout });
};