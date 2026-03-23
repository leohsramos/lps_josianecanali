import { webkit } from 'playwright';

(async () => {
    try {
        const browser = await webkit.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
        page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

        await page.goto('http://localhost:5173/imersao', { waitUntil: 'networkidle' });
        console.log('Page loaded');
        await browser.close();
    } catch (e) {
        console.log('Script Error', e);
    }
})();
