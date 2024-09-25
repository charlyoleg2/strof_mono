strof\_mono
===========

Presentation
------------

This mono-repo contains the following npm-packages:
- [strof](https://www.npmjs.com/package/strof) : the CLI-tool for scanning the text-files per paragraphe (or strophe)
- [create-strof](https://www.npmjs.com/package/create-strof) : the CLI-tool for boilerplating a new *strof directory*

*strof* is a re-write in *javascript* of [sbook](https://github.com/charlyoleg/sbook) written in *python*.


Links
-----

- [sources](https://github.com/charlyoleg2/strof_mono)
- [npm-bin](https://www.npmjs.com/package/strof)
- [npm-create](https://www.npmjs.com/package/create-strof)


Usage of strof
--------------

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


Upgrade dependencies
--------------------

```bash
npm outdated
npm update --save
git commit -am 'npm update --save'
```
or
```bash
npx npm-check-updates
npx npm-check-updates --upgrade
npm install
git commit -am 'npx npm-check-updates --upgrade'
```


Publish a new release
---------------------

```bash
npm run versions
git commit -am 'increment sub-package versions'
npm version patch
git push
git push origin v0.5.3
```

