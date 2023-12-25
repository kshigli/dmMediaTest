export const waitForDisplayed = async (
    element: WebdriverIO.Element,
    timeout = 120000
) => {
    try {
        await element.waitForDisplayed({ timeout });
    } catch (error) {
        console.warn(
            'click failed on element:',
            element,
            error
        );
    }
};

export const waitForDisappeared = async (
    element: WebdriverIO.Element,
    timeout = 40000
) => {
    await element.waitForDisplayed({ timeout, reverse: true });
};