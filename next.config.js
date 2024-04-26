const nextConfig = {
	// images: {
	// 	loader: 'imgix',
	// 	path: '',
	// 	domains: ['http://localhost:8000', 'https://api.exadot.io'],
	// 	// formats: ['image/svg', 'image/png', 'image/jpg', 'image/jpeg'],
	// },
	reactStrictMode: true,
	swcMinify: true,
	devIndicators: {
		autoPrerender: false,
	},
};
module.exports = nextConfig;
