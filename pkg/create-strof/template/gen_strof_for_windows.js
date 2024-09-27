#!/usr/bin/env node
// gen_strof_for_windows.js

import fs from 'node:fs/promises';

const fname = 'strof';

const strofDir = import.meta.dirname;
// TODO : write the windows script
const ftxt = `#!/usr/bin/env bash
# strof

#echo "bash-strof says hello"
#echo $@
cd ${strofDir}
node strof_config.js $@
#echo "bash-strof says bye"
`;

// TODO : adapt the next steps for windows
const finalMsg = `The file ${fname} has been generated!
next steps:
  chmod +x ${fname}
  mv ${fname} ~/bin/
  ${fname} tom ardennes`;

//console.log('Hello from gen_strof_for_windows.js');
try {
	await fs.writeFile(fname, ftxt);
	console.log(finalMsg);
} catch (err) {
	console.log(err);
}
//console.log('Bye from gen_strof_for_windows.js');