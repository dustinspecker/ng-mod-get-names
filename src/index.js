'use strict'
import arrayUnique from 'array-unique'

/**
 * Retrieve list of Angular modules get/set in file
 * @throws {Error} - if fileContents is not passed
 * @throws {TypeError} - if fileContents is not a string
 * @param {String} fileContents - Angular file contents to be examined
 * @returns {String[]} - list of module names get/set in file
 */
module.exports = function (fileContents) {
  const modules = []
  let match

  if (!fileContents) {
    throw new Error('Expected file contents to be passed')
  }

  if (typeof fileContents !== 'string') {
    throw new TypeError('Expected file contents to be a string')
  }

  const regex = /angular[\s]*[.]module[\(]?[\s]*'([^']*)'[^\)angular]*[\)]?/g

  match = regex.exec(fileContents)
  while (match && match[1]) {
    modules.push(match[1])
    match = regex.exec(fileContents)
  }

  return arrayUnique(modules)
}
