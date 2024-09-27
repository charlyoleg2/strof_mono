strof directory
===============


Presentation
------------

This folder contains a local installation of *strof* and the *directory text files* used by *strof*.


Getting started
---------------

```shell
#npm create strof@latest
#cd strofDir
npm install
vim data/rep_contacts.txt
vim strof_config.js
node gen_strof_for_nodejs.js
mv strof ~/bin
#cd any/where
strof tom ardennes
```


Usage
-----

```shell
strof tom ardennes
strof tom ardennes -v champagne -a
```


Alternative usage
-----------------

```shell
npx strof -d data/rep_business.txt -d data/rep_friends.txt tom ardennes
npm run
npm run run -- tom ardennes
node strof_config.js tom ardennes
```


Links
-----

- [sources](https://github.com/charlyoleg2/strof)
- [npm-bin](https://www.npmjs.com/package/strof)
- [npm-create](https://www.npmjs.com/package/create-strof)

