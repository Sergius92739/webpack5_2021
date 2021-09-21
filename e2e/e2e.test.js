import puppetteer from 'puppeteer';

const childProcess = require('child_process');

jest.setTimeout(30000);
describe('_______________', () => {
  let browser = null;
  let page = null;
  let server = null;

  const baseUrl = 'http://localhost:8080';
  beforeAll(async () => {
    server = await childProcess.fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      /* headless: true,
      slowMo: 100,
      devtools: false, */
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  describe('_____________', () => {
    test('Открытие основной страницы', async () => {
      await page.goto(baseUrl);
    });
  });
});
