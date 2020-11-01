import seqPreprocessor from 'svelte-sequential-preprocessor';
import autoPreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import image from 'svelte-image';

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
]);import sveltePreprocess from 'svelte-preprocess';

module.exports = {
  preprocess
};