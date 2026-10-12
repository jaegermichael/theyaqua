import { readFile, writeFile } from 'node:fs/promises';
import { render, structuredData } from '../.prerender/entry-server.js';

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const markup = render();
if (!markup.includes('<h1') || !markup.includes('id="contact"')) {
  throw new Error('Prerender must include the complete homepage.');
}
const schema = JSON.stringify(structuredData).replace(/</g, '\\u003c');
const html = template
  .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
  .replace('</head>', `<script type="application/ld+json">${schema}</script>\n  </head>`);
if (html === template || html.includes('<div id="root"></div>')) {
  throw new Error('Homepage prerender failed.');
}
await writeFile(new URL('../dist/index.html', import.meta.url), html);
console.log('Prerendered homepage and six services with organization structured data.');
