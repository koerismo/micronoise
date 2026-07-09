import esbuild from 'esbuild';

await esbuild.build({
	outbase: './src/',
	entryNames: '[name]',
	entryPoints: [
		'src/gif.ts',
		'src/png.ts',
		'src/tga.ts',
	],
	minify: true,
	sourcemap: 'external',
	outdir: './dist',
	logLevel: 'info',
	target: 'esnext',
});
