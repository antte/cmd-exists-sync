'use strict';

var execSync = require('child_process').execSync;

module.exports = (cmd) => {
  try {
    return !!execSync(`which ${cmd}`);
  } catch(e) {
    return false;
  }
}