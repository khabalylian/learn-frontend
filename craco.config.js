const { addAfterLoader, loaderByName } = require('@craco/craco');

module.exports = {
    webpack: {
        configure: webpackConfig => {
            addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
                test: [/\.(md|mdx)$/],
                loader: require.resolve('@mdx-js/loader')
            });

            return webpackConfig;
			
        },
		configure: (webpackConfig) => {
      // Додаємо правило для обробки MDX файлів
		webpackConfig.module.rules.push({
			test: /\.mdx$/,
			use: [
			{
				loader: 'babel-loader', // Використовуємо Babel для трансляції MDX
			},
			{
				loader: '@mdx-js/loader', // Використовуємо @mdx-js/loader для обробки MDX
			},
			],
		});
    },
    devServer: {
        port: 5000
    }
}}
