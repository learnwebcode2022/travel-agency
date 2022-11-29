module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: "/Users/denislavpopov/Desktop/Sites/travel-agency/app/temp/scripts",
        filename: "App.js"
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