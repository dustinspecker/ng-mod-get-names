# ng-mod-get-names
[![NPM version](https://badge.fury.io/js/ng-mod-get-names.svg)](https://badge.fury.io/js/ng-mod-get-names) [![Build Status](https://travis-ci.org/dustinspecker/ng-mod-get-names.svg)](https://travis-ci.org/dustinspecker/ng-mod-get-names) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/ng-mod-get-names.svg)](https://coveralls.io/r/dustinspecker/ng-mod-get-names?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/ng-mod-get-names/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/ng-mod-get-names) [![Dependencies](https://david-dm.org/dustinspecker/ng-mod-get-names.svg)](https://david-dm.org/dustinspecker/ng-mod-get-names/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/ng-mod-get-names/dev-status.svg)](https://david-dm.org/dustinspecker/ng-mod-get-names/#info=devDependencies&view=table)

> Get module names from an Angular file's contents

## Install
```
npm install --save ng-mod-get-names
```

## Usage
### ES2015
```javascript
import fs from 'fs';
import ngModGetNames from 'ng-mod-get-names';

// file.js
// angular.module('app', ['ngRoute']);
// angular
//  .module('test')
//  .service(....);
const jsFileContents = fs.readFileSync('file.js');

ngModGetNames(jsFileContents);
// => ['app', 'test'];

// file.coffee
// angular.module 'app', ['ngRoute']
// angular
//   .module 'test'
//   .service ....
const coffeeFileContents = fs.readFileSync('file.js');

ngModGetNames(coffeeFileContents);
// => ['app', 'test'];
```

## ES5
```javascript
var fs = require('fs');
var ngModGetNames = require('ng-mod-get-names');

// file.js
// angular.module('app', ['ngRoute']);
// angular
//  .module('test')
//  .service(....);
var jsFileContents = fs.readFileSync('file.js');

ngModGetNames(jsFileContents);
// => ['app', 'test'];

// file.coffee
// angular.module 'app', ['ngRoute']
// angular
//   .module 'test'
//   .service ....
var coffeeFileContents = fs.readFileSync('file.js');

ngModGetNames(coffeeFileContents);
// => ['app', 'test'];
```

## API

### ngModGetNames(fileContents)

#### fileContents

Type: `string`

File contents to analyze for module names.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)