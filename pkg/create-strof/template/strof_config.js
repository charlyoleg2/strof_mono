#!/usr/bin/env node
// strof_config.js

import { execSync } from 'node:child_process';
import { argv } from 'node:process';

const scrDir = import.meta.dirname;
const myCmd = [
	'npx strof',
	'-d data/rep_contacts.txt',
	'-d data/rep_friends.txt',
	'-d data/rep_familly.txt',
	'-d data/rep_business.txt',
	...argv.slice(2)
].join(' ');

//console.log('Hello from strof_config.js');
//console.log(`dbg017: scrDir: ${scrDir}`);
//console.log(`dbg019: myCmd: ${myCmd}`);
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
//console.log('Bye from strof_config.js');
