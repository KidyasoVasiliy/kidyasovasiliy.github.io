let path = require('path');

let conf = {
	entry : './src-js/location.js',
	output : {
		path : path.resolve(__dirname, './dist-js/'),
		filename : 'location.js',
		publicPath : 'dist-js/'
	},//default sitting 
	devServer : {
		overlay : true
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js$/,
	// 			loader: 'babel-loader'
	// 			// exclude : '/node_modules'
	// 		}
	// 	]
	// },
	watch: true,
	devtool: 'eval'
};

module.exports = conf; 