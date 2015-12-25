'use strict';

var execSync = require('child_process').execSync;

module.exports = function(cmd) {
  try {
    return !!execSync(`which ${cmd}`);
  } catch(e) {
    return false;
  }
}