import * as ts from 'typescript'
import * as fs from 'fs'
import * as path from 'path'

const content = fs.readFileSync(path.join(__dirname, 'sample.ts'), 'utf8')
// const config = tsc.readConfigFile(path.join(__dirname, 'tsconfig.json'), tsc.sys.readFile)

const tsconfigPath = path.join(__dirname, 'tsconfig.json')
const config = ts.readConfigFile(tsconfigPath, ts.sys.readFile)
const compilerConfig: ts.ParsedCommandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, path.dirname(tsconfigPath))

const transpiled = ts.transpile(content, compilerConfig.options)
fs.writeFileSync(path.join(__dirname, 'dist', 'transpiled.js'), transpiled, 'utf8')
