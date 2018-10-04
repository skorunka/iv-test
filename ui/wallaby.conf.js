module.exports = function() {
	return {
		files: [
			'tsconfig.json',
			'src/environments/.env.ts',
			'src/translations/*.json',
			'src/**/*.ts',
			'src/**/*.snap',
			'!src/**/*.spec.ts',
			'!src/**/*.mock.ts',
			'!src/**/*.d.ts',
		],

		tests: ['src/**/*.spec.ts', 'src/**/*.mock.ts', 'src/**/*.d.ts'],

		env: {
			type: 'node',
			runner: 'node',
		},

		testFramework: 'jest',

		preprocessors: {
			'**/*.js': file =>
				require('babel-core').transform(file.content, { sourceMap: true, filename: file.path, presets: ['babel-preset-jest'] }),
		},

		jest: {
			modulePaths: ['<rootDir>/src/'],
			moduleNameMapper: {
				'@app/(.*)': '<rootDir>/src/app/$1',
				'@env/(.*)': '<rootDir>/src/environments/$1',
			},
		},
		debug: true,
	};
};
