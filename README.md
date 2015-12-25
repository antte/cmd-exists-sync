# cmd-exists-sync

[![Build Status: Linux](https://travis-ci.org/mrzmyr/cmd-exists-sync.svg?branch=master)](https://travis-ci.org/mrzmyr/cmd-exists-sync)

> Node module to check synchronously if a command-line command exists

## Install

Requires NodeJS 0.11+ ([Reference](https://github.com/nodejs/node/blob/master/CHANGELOG.md#20140311-version-01112-unstable))

```bash
npm install cmd-exists-sync
```

## Usage

```js
var cmdExists = require('cmd-exists-sync');

if(cmdExists('ls')) {
  // ls all day long...
}
```