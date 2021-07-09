const puppeteer = require('puppeteer');

puppeteer.launch()
	.then((browser) => {
		return browser.newPage()
			.then((page) => {
				return page.goto('http://google.com')
				.then(() => page.screenshot({path: 'google.png'}))
			})
			.then(() => browser.close());
	});