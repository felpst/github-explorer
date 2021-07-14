const path = require('path') // This is a good convention
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'productions'; // Environment variables, that are used to configure things based on the mode that the project is running. This identifies if the product is on development mode or production mode.

module.exports = {
    mode: isDevelopment ? 'development' : 'production', // Making sure I am using the correct mode based on the mode I am running the project.
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', // This will allow me to check the original code when there is an error.
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //This indicates what is the main file of the project
    output: { // This is the file I am going to generate with weebpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], // All this formats must work for my application
    },
    devServer: { // This will automatically run the webpack when tehre is an update
        contentBase: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: { // This is to define how I want to deal with each file that I am importing
        rules: [
            {
                test: /\.jsx$/, // This is a regular expression that gets all the files that end with .jsx
                exclude: /node_modules/, // I don't want that the .jsx files that import get converte
                use: 'babel-loader'
            },
            {
                test: /\.scss$/, 
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // Here I am stating that I want to use both loaders to interpret my css file.
            }
        ],
    }
};