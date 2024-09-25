create-strof
============


Presentation
------------

*create-strof* is the *initializer* used by *npm* for creating a new *strof-directory*. It contains the *command line interface* application called by `npm create strof@latest`.


Links
-----

- [sources](https://github.com/charlyoleg2/strof_mono)
- [pkg](https://www.npmjs.com/package/create-strof)


Requirements
------------

- [node](https://nodejs.org) > 20.10.0
- [npm](https://docs.npmjs.com/cli) > 10.5.0


Usage
-----

*create-strof* is not intended to be installed directly but rather used via one of the following commands:

```bash
npm create strof@latest
npm init strof@latest
npm exec create-strof@latest
npx create-strof@latest
```

Dev
---

```bash
git clone https://github.com/charlyoleg2/create-strof
cd create-strof
npm install
npm run ci
npm run run
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


