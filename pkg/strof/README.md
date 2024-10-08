Strof
=====


Presentation
------------

*strof* is a *nodejs* package that contains the executable *strof*, a tool for quering text-files per paragraph (i.e. strophe).
*strof* is a re-write in *javascript* of [sbook](https://github.com/charlyoleg/sbook) written in *python*.

The name *strof* is the contraction of *string of* and it is pronounced like *strophe* is synonyme of *paragraphe*.


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

