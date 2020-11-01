import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import { mdsvex } from 'mdsvex';
import image from 'svelte-image';


const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	(warning.code === 'THIS_IS_UNDEFINED') ||
	onwarn(warning);

const preprocess  = seqPreprocessor([
	autoPreprocess({
		scss: {
			prependData: `@import 'src/styles/variables.scss';`
		},
		postcss: {
			plugins: [require('autoprefixer')()]
		}
	}),
	mdsvex(),
	image({
		sizes: [400, 800, 1200],
		breakpoints: [375, 768, 1024],
		trace: {
			background: "#f3ecdb",
			color: "#414535",
			threshold: 120
		  } 
	})
]);

const ext = [
	'.svelte',
	'.svx'
];

export default {
	client: {
		input: config.client.input().replace(/.js$/, '.ts'),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				extensions: ext,
				dev,
				hydratable: true,
				preprocess,
				emitCss: true
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			typescript({ sourceMap: dev }),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', ...ext],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: { server: config.server.input().server.replace(/.js$/, ".ts") },
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				extensions: ext,
				generate: 'ssr',
				hydratable: true,
				preprocess,
				dev
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			typescript({ sourceMap: dev })
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input().replace(/.js$/, '.ts'),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			typescript({ sourceMap: dev }),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};
