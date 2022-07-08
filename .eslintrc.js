module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'amd': true,
		'jest': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'brace-style': 'error',
		'indent': [
			'error', 
			'tab'
		],
		'quotes': [
			2,
			'single'
		],
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 'off'
	}
}
