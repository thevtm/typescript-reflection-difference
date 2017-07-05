import * as ts from 'typescript'
import * as fs from 'fs'
import * as path from 'path'

// TSConfig
const tsconfigPath = path.join(__dirname, 'tsconfig.json')
const config = ts.readConfigFile(tsconfigPath, ts.sys.readFile)
const compilerConfig: ts.ParsedCommandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, path.dirname(tsconfigPath))

// Compile
const program = ts.createProgram(compilerConfig.fileNames, compilerConfig.options)
let emitResult = program.emit(program.getSourceFile('sample.ts'),
//(fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void, sourceFiles?: ts.SourceFile[]): void
  (fileName: string, data: string, writeByteOrderMark: boolean) => {
    console.log(fileName, data)
  })

// Error messages
let allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics)
allDiagnostics.forEach(diagnostic => {
  if (diagnostic.file == null) {
    let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
    console.log(`${message}`)
  } else {
    let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
    let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
    console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`)
  }
})
