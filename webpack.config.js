const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'client', 'app', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'src/client/public/app'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
            { test: /\/jsx?$/, exclude: /node_modules/, use:[{loader: "babel-loader"}] },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
				test: /\.m?js/,
				resolve: {
				  fullySpecified: false
				}
			},
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: [".css", ".ts", ".tsx", ".js", ".jsx", ".json"]
    },
}