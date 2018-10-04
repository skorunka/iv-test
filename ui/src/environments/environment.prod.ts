import env from './.env';

export const environment = {
	hmr: false,
	production: true,
	version: env.npm_package_version,
	serverUrl: '/api',
	defaultLanguage: 'cs-CZ',
	supportedLanguages: ['en-US', 'cs-CZ'],
};
