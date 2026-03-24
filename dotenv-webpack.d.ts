declare module 'dotenv-webpack' {
	import type {Compiler,WebpackPluginInstance} from 'webpack';

	interface DotenvOptions {
		path?: string;
		safe?: boolean|string;
		systemvars?: boolean;
		silent?: boolean;
		defaults?: boolean|string;
		expand?: boolean;
		prefix?: string;
	}

	export default class Dotenv implements WebpackPluginInstance {
		constructor(options?: DotenvOptions);
		apply(compiler: Compiler): void;
	}
}