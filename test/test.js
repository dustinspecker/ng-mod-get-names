/* global describe, it */
'use strict';
import {EOL} from 'os';
import {expect} from 'chai';
import ngModGetNames from '../lib/';

describe('ng-mod-get-names', () => {
  it('should throw Error if no file contents passed', () => {
    function test() {
      ngModGetNames();
    }

    expect(test).to.throw(Error, /Expected file contents to be passed/);
  });

  it('should throw TypeError if fileContents is not a string', () => {
    function test() {
      ngModGetNames(1234);
    }

    expect(test).to.throw(TypeError, /Expected file contents to be a string/);
  });

  it('should return empty array if no modules found', () => {
    expect(ngModGetNames('no modules')).to.eql([]);
  });

  it('should find modules using getter', () => {
    expect(ngModGetNames('angular.module(\'test\')')).to.eql(['test']);
    expect(ngModGetNames('angular.module(\'MODULE\')')).to.eql(['MODULE']);
    expect(ngModGetNames('angular.module(\'test\')angular.module(\'MODULE\')')).to.eql(['test', 'MODULE']);
  });

  it('should find modules using setter', () => {
    expect(ngModGetNames('angular.module(\'test\', [])')).to.eql(['test']);
    expect(ngModGetNames('angular.module(\'MODULE\', [])')).to.eql(['MODULE']);
    expect(ngModGetNames('angular.module(\'test\', [])angular.module(\'MODULE\', [])')).to.eql(['test', 'MODULE']);
    expect(ngModGetNames('angular.module(\'test\', [\'a\'])')).to.eql(['test']);
    expect(ngModGetNames('angular.module(\'MODULE\', [\'b\', \'c\'])')).to.eql(['MODULE']);
    expect(ngModGetNames('angular.module(\'test\', [\'a\'])angular.module(\'MODULE\', [\'b\', \'c\'])'))
      .to.eql(['test', 'MODULE']);
  });

  it('should find modules using both getter and setter', () => {
    expect(ngModGetNames('angular.module(\'test\', [])angular.module(\'MODULE\')')).to.eql(['test', 'MODULE']);
  });

  it('should handle whitespace', () => {
    expect(ngModGetNames(`angular${EOL}.module( 'test', [] )`)).to.eql(['test']);
  });

  it('should handle CoffeeScript', () => {
    expect(ngModGetNames('angular.module \'test\'')).to.eql(['test']);
    expect(ngModGetNames('angular.module \'MODULE\', []')).to.eql(['MODULE']);
  });
});
