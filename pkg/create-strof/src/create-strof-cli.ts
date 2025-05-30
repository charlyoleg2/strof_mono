#!/usr/bin/env node
// create-strof-cli.ts

import * as prom from '@clack/prompts';
import chalk from 'chalk';
import packag from '../package.json';
import { setTimeout as sleep } from 'node:timers/promises';
import { generate_boirlerplate } from './create-strof-api';
//import type { tCfg1, tResp } from './create-strof-common';
import type { tCfg1 } from './create-strof-common';
import { prefixOutputPath, strofDir } from './create-strof-common';

// first message
const firstMsg =
	`Create a new ${chalk.italic('strof')} directory` +
	` with ${chalk.italic(packag.name)} version ${chalk.italic(packag.version)}`;

console.log(firstMsg);

// get optional project-name from command-line
//const projName = process.argv[2] || 'blabla';
//console.log(`dbg016: projName: ${projName}`);

const argN = process.argv.length - 2;
if (argN > 0) {
	console.log(`warn376: ${argN} arguments provided but all argument are ignored!`);
}

// questions
prom.intro(chalk.inverse(' Your new strof directory '));
const pCfg = await prom.group(
	{
		linuxScript: () =>
			prom.confirm({
				message: 'Do you want an helper Linux script?',
				initialValue: true
				//placeholder: `${projName}`
			}),
		windowsScript: () =>
			prom.confirm({
				message: 'Do you want an helper Windows script?',
				initialValue: false
				//placeholder: `${projName}_vag`
			})
	},
	{
		onCancel: () => {
			prom.cancel('Operation aborted!');
			process.exit(0);
		}
	}
);
prom.outro('Your new strof directory will be boilerplated!');

const cfg1: tCfg1 = {
	linuxScript: pCfg.linuxScript,
	windowsScript: pCfg.windowsScript
};
const preDir = prefixOutputPath();
const resp = await generate_boirlerplate(cfg1, preDir);
await sleep(100);

// last message
function styl(str: string): string {
	const rStr = chalk.bold.cyan(str);
	return rStr;
}

const lastMsg = `
Next steps:
  1: ${styl(`cd ${strofDir}`)}
  2: ${styl(`npm install`)}
  3: ${styl(`git init && git add -A && git commit -m "Initial commit of ${strofDir}"`)} (optional)
  4: ${styl(`${resp.vim}`)} (optional)
  5: ${styl(`vim strof_config.js`)} (optional)
  6: ${styl(`node gen_strof_for_nodejs.js`)}
  7: ${styl(`chmod +x strof.mjs`)}
  8: ${styl(`mv strof.mjs ~/bin/`)}
  9: ${styl(`strof.mjs tom ardennes`)}
 10: ${styl(`strof.mjs tom ardennes -v champagne -a`)}
`;

console.log(lastMsg);

// end of script
