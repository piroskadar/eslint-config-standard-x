'use strict';

var fs = require('fs');
var path = require('path');

var configPath = path.join(__dirname, '.eslintrc.json');
var configContent = fs.readFileSync(configPath);

module.exports = JSON.parse(configContent);
