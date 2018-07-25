let path = require('path');

let conf = {
	entry : './src-js/builder.js',
	output : {
		path : path.resolve(__dirname, './dist-js/'),
		filename : 'builder.js',
		publicPath : 'dist-js/'
	},//default sitting 
	devServer : {
		overlay : true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
				// exclude : '/node_modules'
			}
		]
	},
	watch: true,
	devtool: 'cheap-eval-source-map'
};

module.exports = conf; 