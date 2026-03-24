/// <reference path="./dotenv-webpack.d.ts" />

import Dotenv from 'dotenv-webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import type { Configuration } from 'webpack';
import devConfig from './webpack.dev.config';
import prodConfig from './webpack.prod.config';

type Mode = 'prod' | 'dev' | 'development';

interface EnvArgs {
    mode?: Mode;
}

const baseConfig: Configuration = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

export default (env: EnvArgs = {}): Configuration => {
    const isProductionMode = env.mode === 'prod';
    return merge(baseConfig, isProductionMode ? prodConfig : devConfig);
};
