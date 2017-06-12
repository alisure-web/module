module.exports = {
    devtool: "source-map",
    entry: __dirname + "/src/module/module.js",
    output: {
        path: __dirname + "/dist/browser/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};
