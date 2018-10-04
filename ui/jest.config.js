module.exports = {
	setupFiles: ['<rootDir>/src/setupJest.js'],
	testMatch: ['<rootDir>/src/app/**/+(*.)+(spec|test).ts'],
	moduleNameMapper: {
		'@app/(.*)': '<rootDir>/src/app/$1',
		'@env/(.*)': '<rootDir>/src/environments/$1',
	},
	// testEnvironment: 'node',
};
