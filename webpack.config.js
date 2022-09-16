const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000,
        open: "google-chrome"
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
  	    }, {
            test: /\.(jpg|png|woff|woff2|eot|ttf|svg|glb|gltf|otf)$/,
            use: ["url-loader"]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: path.resolve(__dirname, "public", "favicon.svg")
        })
    ]
}
