/* --------------------
 * react-lazy-data module
 * Tests ESLint config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-node'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^react-lazy-data($|/)']}],
		'node/no-missing-import': ['error', {allowModules: ['react-lazy-data']}]
	},
	overrides: [{
		files: ['!.*'],
		extends: [
			'@overlookmotel/eslint-config-jest',
			'@overlookmotel/eslint-config-react'
		],
		rules: {
			'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}],
			'react/jsx-filename-extension': ['off']
		}
	}]
};
