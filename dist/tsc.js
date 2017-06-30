"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsc = require("typescript");
var fs = require("fs");
var path = require("path");
var content = fs.readFileSync(path.join(__dirname, '..', 'direct.ts'), 'utf8');
var config = tsc.readConfigFile(path.join(__dirname, '..', 'tsconfig.json'), function (file) {
    var read = tsc.sys.readFile(file);
    return read;
});
var transpiled = tsc.transpile(content, config.config.compilerOptions);
fs.writeFileSync(path.join(__dirname, 'transpiled.js'), transpiled, 'utf8');
//# sourceMappingURL=tsc.js.map