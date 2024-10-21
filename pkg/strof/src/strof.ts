#!/usr/bin/env node
// strof.ts
// the phone-book cli-tool

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { exit } from 'node:process';
import fs from 'node:fs/promises';
import path from 'node:path';

//console.log('strof says Hello!');

const argv = yargs(hideBin(process.argv))
	.scriptName('strof')
	.usage('Usage: $0 -d <my_directory.txt> [options] <key_word_1> <key_word_2>')
	.example([
		['$0 -d ../path/to/my_book.txt media', 'search for "media"'],
		['$0 -d ../path/to/my_book.txt media journal', 'seach for "media" and "journal"'],
		['$0 -d ../path/to/my_book.txt media\\|ardennes', 'search for "media" or "ardennes"'],
		[
			'$0 -d ../path/to/my_book.txt media\\|ardennes journal',
			'search for ("media" or "ardennes") and "journal"'
		]
	])
	.option('directory', {
		alias: 'd',
		type: 'string',
		nargs: 1,
		description: 'Path to a phone-book',
		array: true,
		default: []
	})
	.option('grep_v', {
		alias: 'v',
		type: 'string',
		nargs: 1,
		description: 'Words used to unselect the displayed paragraph.',
		array: true,
		default: []
	})
	.option('append_filename', {
		alias: 'a',
		type: 'boolean',
		description:
			'Append at the end of each entry its filename. This is useful when working with several directory files to get more filter possibilities.',
		default: false
	})
	.command('$0 [keyWords..]', 'Words used to select the displayed paragraph')
	//.demandCommand(1, 'You need at least one keyWords')
	.strict()
	.parseSync();
//console.log(argv);

// shall add the filename to each entries?
let addFilename = false;
if (argv.append_filename) {
	addFilename = true;
}
//console.log(`dbg060: addFilename: ${addFilename}`);

// read the directory files
if (argv.directory.length < 1) {
	console.log('err520: Error no path to directory text files provided!');
	exit(1);
}
const entries: string[] = [];
for (const pdf of argv.directory) {
	const fileName = path.basename(pdf);
	try {
		const ftxt = await fs.readFile(pdf, { encoding: 'utf8' });
		//console.log(ftxt);
		const txt1 = ftxt.replace(/\n(\s*#.*\n)+/g, '\n'); // remove lines containing only comments
		const txt2 = txt1.replace(/#.*\n/g, '\n'); // remove comments written after data
		const txt3 = txt2.replace(/[ \t]+\n/g, '\n'); // remove spaces at the end of a line
		const txt4 = txt3.replace(/\n\n+/g, '\n\n'); // remove useless line returns
		const txt5 = txt4.replace(/^\n+/g, ''); // remove the first line returns
		const txt6 = txt5.replace(/\n+$/g, ''); // remove the last line returns
		const ltxt = txt6.split(/\n\n/);
		if (addFilename) {
			for (let idx = 0; idx < ltxt.length; idx++) {
				ltxt[idx] += `\n${fileName}`;
			}
		}
		entries.push(...ltxt);
	} catch (err) {
		console.log(err);
		console.log(`err560: Error while reading the directory file ${pdf}!`);
		exit(1);
	}
}
//console.log(`dbg074: entries length: ${entries.length}`);
//for (let idx = 0; idx < entries.length; idx++) {
//	console.log(`\nidx: ${idx}`);
//	console.log(entries[idx]);
//}

const seltxt: string[] = [];
if (Object.hasOwn(argv, 'keyWords')) {
	for (let idx = 0; idx < entries.length; idx++) {
		let selectIt = true;
		// select key-words
		for (const kw of argv.keyWords as string[]) {
			const regex = new RegExp(kw, 'i');
			if (!regex.test(entries[idx])) {
				selectIt = false;
			}
		}
		// unselect grep_v
		for (const gv of argv.grep_v) {
			const regex = new RegExp(gv, 'i');
			if (regex.test(entries[idx])) {
				selectIt = false;
			}
		}
		// add selected
		if (selectIt) {
			seltxt.push(entries[idx]);
		}
	}
} else {
	console.log('err598: Error no key-words provided');
	exit(1);
}

// final output in console
//console.log(`\ndbg122: seltxt length: ${seltxt.length}`);
for (let idx = 0; idx < seltxt.length; idx++) {
	console.log(`${idx + 1}:`);
	console.log(seltxt[idx] + '\n');
}
console.log(`Found entries: ${seltxt.length}`);

//console.log('strof says Bye!');
