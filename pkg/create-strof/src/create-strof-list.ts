// create-strof-list.ts

const template_file_list = [
	'.editorconfig',
	'.gitignore',
	'package.json',
	'README.md',
	'strof_config.js',
	'gen_strof_for_nodejs.js',
	'data/rep_contacts.txt',
	'data/rep_business.txt',
	'data/rep_familly.txt',
	'data/rep_friends.txt'
];
const template_linux_file_list = ['gen_strof_for_linux_bash.js'];
const template_windows_file_list = ['gen_strof_for_windows.js'];

export { template_file_list, template_linux_file_list, template_windows_file_list };
