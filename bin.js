#!/usr/bin/env node
const service = require('turndown')({
  headingStyle: 'setext',
  hr: '---',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  fence: '```',
  emDelimiter: '_',
  strongDelimiter: '**',
  linkStyle: 'inlined'
})

const input = require('fs').readFileSync(0, 'utf8')
process.stdout.write(service.turndown(input))
process.stdout.write('\n')
