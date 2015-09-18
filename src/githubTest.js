module.exports = {
	'@tags': ['demo'], // ./nightwatch --tag demo

	'before': function (browser) {
		browser
			.url('https://github.com/nathansass')
			.waitForElementVisible('body', 1000);
	},

	'after': function (browser) {
		browser.end();
	},

	'My name should be on the page': function(browser) {
		browser.expect.element('.vcard-fullname').text.to.equal('Nathan Sass');
	}
};