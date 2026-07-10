import esbuild from 'esbuild';

for (const RGB of [false, true]) {
	await esbuild.build({
		outbase: './src',
		outdir: './dist',
		entryPoints: [
			'src/gif.ts',
			'src/png.ts',
			'src/tga.ts',
		],

		entryNames: RGB ? '[name].rgb' : '[name]',
		define: { RGB: RGB.toString() },

		treeShaking: true,
		minify: true,
		minifySyntax: true,

		sourcemap: 'external',
		logLevel: 'info',
		target: 'esnext',
	});
}
