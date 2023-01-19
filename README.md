<p align="center">My first package for test</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@chokojoestar/choko-package?style=flat-square)](https://www.npmjs.com/package/@chokojoestar/choko-package)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@chokojoestar/choko-package&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=image.png)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/image.png?style=flat-square)](https://bundlephobia.com/package/image.png@latest)
[![npm downloads](https://img.shields.io/npm/dm/@chokojoestar/choko-package.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@chokojoestar/choko-package)

</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installing](#installing)
  - [Package manager](#package-manager)
- [Example](#example)
- [Credits](#credits)
- [License](#license)

## Features

-  Return true or false

## Installing

### Package manager

Using npm:

```bash
$ npm install @chokojoestar/myfirstpackage
```

Once the package is installed, you can import the library using `import` or
`require` approach:

```ts
import { isChokoJoestar } from "@chokojoestar/myfirstpackage";
```

## Example

```js
import { isChokoJoestar } from "@chokojoestar/myfirstpackage";

// Return true with a log
isChokoJoestar("ChokoJoestar", true);
isChokoJoestar("Choko", true);
isChokoJoestar("Chokomo", true);

// Return false without a log
isChokoJoestar("Hey Choko");
isChokoJoestar("My name is ChokoJoestar");
isChokoJoestar("My friend is Chokomo");
```

## Credits

Creator: ChokoJoestar

## License

[MIT](https://github.com/ChokoJoestar/my-first-npm-package/blob/main/LICENCE)
