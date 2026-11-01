import { build } from 'esbuild';

await build({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  format: 'esm',
  target: 'es2022',
  outdir: '../static/ui',
  entryNames: 'app',
  external: ['/static/*'],
  minify: true,
  sourcemap: false,
  legalComments: 'eof',
});
