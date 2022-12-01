module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: "/Users/denislavpopov/Desktop/Sites/travel-agency/app/temp/scripts",
        filename: "[name].js"
    },
    module:{
        rules:[
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}