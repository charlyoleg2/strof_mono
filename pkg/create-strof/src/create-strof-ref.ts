#!/usr/bin/env node
// create-strof-ref.ts

import { setTimeout as sleep } from 'node:timers/promises';
import { generate_boirlerplate } from './create-strof-api';
//import type { tCfg1, tResp } from './create-strof-common';
import type { tCfg1 } from './create-strof-common';
//import { firstLetterCapital, prefixOutputPath } from './create-strof-common';

// get optional preDir from command-line
const preDir = process.argv[2] || 'tmp2';
//console.log(`dbg019: preDir: ${preDir}`);

const argN = process.argv.length - 2;
if (argN > 0) {
	console.log(`warn375: ${argN} arguments provided but all argument are ignored!`);
}

const cfg1: tCfg1 = {
	linuxScript: true,
	windowsScript: false
};
await generate_boirlerplate(cfg1, preDir);
await sleep(100); // for fun

// end of script
