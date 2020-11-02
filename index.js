const configConventional = require('@commitlint/config-conventional');
const configConventionalTypeEnum = configConventional.rules['type-enum'];

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[...configConventionalTypeEnum[2], 'css', 'infra'],
		],
	},
};
