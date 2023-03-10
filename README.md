<h1 align="center">

<p style="text-decoration: underline;">My first package for test</p>

</h1>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@chokojoestar/choko-package?style=flat-square)](https://www.npmjs.com/package/@chokojoestar/choko-package)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@chokojoestar/choko-package&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=image.png)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/image.png?style=flat-square)](https://bundlephobia.com/package/image.png@latest)
[![npm downloads](https://img.shields.io/npm/dm/@chokojoestar/choko-package.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@chokojoestar/choko-package)

</div>

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Installing](#installing)
  - [Package manager](#package-manager)
    - [Using npm](#using-npm)
    - [Using yarn](#using-yarn)
    - [Using bower](#using-bower)
    - [Using pnpm](#using-pnpm)
  - [CDN](#cdn)
    - [Using jsDelivr CDN (ES5 UMD browser module):](#using-jsdelivr-cdn-es5-umd-browser-module)
- [Example](#example)
- [Credits](#credits)
- [CHANGELOG](#changelog)
- [License](#license)

## Installing

### Package manager

#### Using npm

```bash
$ npm install @chokojoestar/choko-package
```

#### Using yarn

```bash
$ yarn install @chokojoestar/choko-package
```
#### Using bower

```bash
$ bower install @chokojoestar/choko-package
```
#### Using pnpm

```bash
$ pnpm add @chokojoestar/choko-package
```

Once the package is installed, you can import the library using `import` or
`require` approach:

```ts
import isChokoJoestar from "@chokojoestar/choko-package";
```
### CDN

#### Using jsDelivr CDN (ES5 UMD browser module):

```html
<script src="https://cdn.jsdelivr.net/npm/@chokojoestar/choko-package@1.0.6/file"></script>
```


## Example

```js
import { isChokoJoestar } from "@chokojoestar/choko-package";

// Return true with a log
isChokoJoestar("ChokoJoestar", true);
isChokoJoestar("Choko", true);
isChokoJoestar("Chokomo", true);

isChokoJoestar("Hey Choko"); // Return false without a log
isChokoJoestar("My name is ChokoJoestar"); // Return false without a log
isChokoJoestar("Chokomo"); // Return true without a log
```

## Credits

Creator: ChokoJoestar

## CHANGELOG

[1.0.6](https://github.com/CaveDeTemmie/CavePack/blob/main/CHANGELOG.md)

## License

[MIT](https://github.com/CaveDeTemmie/CavePack/blob/main/LICENCE)
