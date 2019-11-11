import * as shell from 'shelljs';
shell.cp('-R', './src/assets', './dist/src');
shell.cp('-R', 'package.json', './dist/package.json');
shell.cp('-R', 'tsconfig.json', './dist/tsconfig.json');
shell.rm('-R', './dist/test');
