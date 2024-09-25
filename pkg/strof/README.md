README of strof
=================


Presentation
------------

*strof* is a *nodejs* package that contains the bin *strof*, a tool for quering text-files per paragraph (i.e. strophe).


Links
-----

- [sources](https://github.com/charlyoleg2/strof_mono)
- [npm-bin](https://www.npmjs.com/package/strof)
- [npm-create](https://www.npmjs.com/package/create-strof)


Requirements
------------

- [node](https://nodejs.org) > 20.10.0
- [npm](https://docs.npmjs.com/cli) > 10.5.0


Installation
------------

```bash
npm i -D strof
npx strof --help
```


Usage of strof
--------------

```shell
npx strof
npx strof --help
```

Or

```shell
npm create strof@latest
cd strofDir
npm install
vim data/rep_contacts.txt
npx strof -d data/rep_contacts.txt tom ardennes
strof.sh tom ardennes
```


Development of strof
--------------------

```shell
git clone https://github.com/charlyoleg2/strof_mono.git
cd strof_mono
npm install
npm run ci
npm run tests
```

