<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/beautlog/main/.github/images/favicon512x512-npm.png" align="center" alt=":package: beautlog" />
 <h2 align="center">:package: beautlog</h2>
 <p align="center">Show log messages on your terminal with style :-) . Use debugging levels to enable or disable log messages.</p>
</p>

  <p align="center">
    <a href="https://github.com/hebertcisco/beautlog/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/beautlog?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/beautlog/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/beautlog?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/beautlog">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/beautlog?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/beautlog">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/beautlog?color=336791&label=Total%20downloads" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/beautlog/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/beautlog/issues/new/choose">Request Feature</a>
  </p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>Show log messages on your terminal with style :-) . Use debugging levels to enable or disable log messages.</strong>✨</p>


# Getting started

# Usage
```js
const Console = require('beautlog');

Console.trace('Trace');//change the level to use trace
Console.success('Success');
Console.ok('Ok');//success alias
Console.debug('Debug');
Console.info('Info');
Console.warning('Warning');
Console.warn('Warn');//warning alias
Console.error('Error');
```
or
```ts
import Console from 'beautlog';

Console.trace('Trace');//change the level to use trace
Console.success('Success');
Console.ok('Ok');//success alias
Console.debug('Debug');
Console.info('Info');
Console.warning('Warning');
Console.warn('Warn');//warning alias
Console.error('Error');
```
or
```ts
import { print, printf, log, debug } from 'beautlog';

print('Hello World');
printf('Hello World');
log('Hello World');
debug('Hello World');
```
## Installation

```bash
npm i log-beautify
```

> Clone this repository: `git clone https://github.com/hebertcisco/beautlog`

### Open the directory and run the script line:

```bash
cd beautlog && npm i && rm -rf .git && git init
```
