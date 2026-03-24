import path from 'path';
import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Configuration = WebpackConfiguration & {
    devServer?: DevServerConfiguration;
};

const devConfig: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
    },
};

export default devConfig;
