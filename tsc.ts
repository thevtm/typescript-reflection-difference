import * as tsc from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

const content = fs.readFileSync(path.join(__dirname, '..', 'direct.ts'), 'utf8');
const config = tsc.readConfigFile(path.join(__dirname, '..', 'tsconfig.json'), file => {
  const read = tsc.sys.readFile(file);
  return read;
});

const transpiled = tsc.transpile(content, config.config.compilerOptions);
fs.writeFileSync(path.join(__dirname, 'transpiled.js'), transpiled, 'utf8');
