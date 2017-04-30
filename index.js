'use strict';

require('es5-shim');
require('es5-shim/es5-sham');
if (typeof JSON === 'undefined') {
  JSON = {};
}
require('json3').runInContext(null, JSON);
require('es6-shim');
var es7 = require('es7-shim');
Object.keys(es7).forEach(function (key) {
  var obj = es7[key];
  if (typeof obj.shim === 'function') {
    obj.shim();
  }
});
var fs = require('fs');
var path = require('path');

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, '.eslintrc.json')));
