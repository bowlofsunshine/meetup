import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        const browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250 // slow down by 250ms
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.eventDetails');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const extra = await page.$('.eventDetails .extra');
        expect(extra).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.eventDetails .details-btn');

        const extra = await page.$('.eventDetails .extra');
        expect(extra).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.eventDetails .details-btn');

        const extra = await page.$('.eventDetails .extra');
        expect(extra).toBeNull();
    });
});

describe('Filter events by city', () => {
    let browser;
    let page;
    jest.setTimeout(50000);
    beforeAll(async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 250 // slow down by 250ms
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.eventsList');
    });

    afterAll(() => {
        browser.close();
    });

    test('By default, when user hasn’t searched for a city, show upcoming events based on the user’s location', async () => {
        const extra = await page.$('.eventsList');
        expect(extra).toBeDefined();
    });

    test('User should see a list of suggestions when they search for a city', async () => {
        const extra = await page.$('.suggestions');
        await page.type('.city', 'Munich')

        expect(extra).toBeDefined();
    });
    test('User can select a city from the suggested list', async () => {
        const extra = await page.$('.suggestions');
        await page.click('.cityName');
        expect(extra).toBeDefined();
    });

})