import env from './.env';

export const environment = {
	hmr: true,
	production: false,
	version: env.npm_package_version + '-dev',
	serverUrl: '/api',
	defaultLanguage: 'cs-CZ',
	supportedLanguages: ['en-US', 'cs-CZ'],
};
