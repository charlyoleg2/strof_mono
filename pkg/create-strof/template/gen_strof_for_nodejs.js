#!/usr/bin/env node
// gen_strof_for_nodejs.js

import fs from 'node:fs/promises';

const fname = 'strof';

const strofDir = import.meta.dirname;
const ftxt = `#!/usr/bin/env node
// strof

import { execSync } from 'node:child_process';
import { argv } from 'node:process';

const scrDir = '${strofDir}';

const myCmd = [
	'node strof_config.js',
	...argv.slice(2)
].join(' ');

//console.log('Hello from strof');
//console.log(\`dbg017: scrDir: \${scrDir}\`);
//console.log(\`dbg019: myCmd: \${myCmd}\`);
try {
	//const cmdOut = execSync(myCmd, {cwd: scrDir, stdio: 'pipe', encoding: 'utf8'});
	const cmdOut = execSync(myCmd, { cwd: scrDir, encoding: 'utf8' });
	//console.log(cmdOut);
	process.stdout.write(cmdOut); // no additional newline
} catch (err) {
	//console.log(err);
	process.stdout.write(err.stdout);
	console.log('err891: Error while running child_process');
}
//console.log('Bye from strof');
`;

const finalMsg = `The file ${fname} has been generated!
next steps:
  chmod +x ${fname}
  mv ${fname} ~/
  ${fname} tom ardennes`;

//console.log('Hello from gen_strof_for_nodejs.js');
try {
	await fs.writeFile(fname, ftxt);
	console.log(finalMsg);
} catch (err) {
	console.log(err);
}
//console.log('Bye from gen_strof_for_nodejs.js');
