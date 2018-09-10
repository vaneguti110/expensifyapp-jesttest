//entry --> output
//in test below \ means to escape . so look for all files js ($ means valid selector that ends with js) in module for instance 
//test below use: another term to put an array of the set of css loader in this case

const path = require("path");

module.exports = {
	mode: 'none',
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js"
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				//test: /\.css$/,
				//use: ['styles-loader','css-loader']
				//adding ? means look for content that has scss and css
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, "public"),
		historyApiFallback: true 
	}
};
