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
  <a href="https://github.com/hebertcisco/beautlog">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/beautlog.svg" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/beautlog/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/beautlog/issues/new/choose">Request Feature</a>
  </p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>Show log messages on your terminal with style :-) . Use debugging levels to enable or disable log messages.</strong>✨</p>


# Getting started

## Installation

```bash
npm i beautlog
```
or
## Installation

```bash
yarn add beautlog
```
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

Console.WriteLine('Hello World');
Console.trace('Trace');
Console.success('Success');
Console.ok('Ok');
Console.debug('Debug');
Console.info('Info');
Console.warning('Warning');
Console.warn('Warn');
Console.error('Error');
```
or
```ts
import { puts, print, printf, log, debug } from 'beautlog';

puts('Hello World');
print('Hello World');
printf('Hello World');
log('Hello World');
debug('Hello World');
```

# Input usage
```ts
import Console, { input } from 'beautlog';

const myValue = input('Insert an value:');

//or:
const mySecondValue = Console.ReadLine('Insert an second value:');

//result:
Console.Write(`${myValue} and ${mySecondValue}`);
```
> Clone this repository: `git clone https://github.com/hebertcisco/beautlog`

### Open the directory and run the script line:

```bash
cd beautlog && npm i && rm -rf .git && git init
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2023 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
