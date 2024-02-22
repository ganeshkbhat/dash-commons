/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: index.js
 * File Description: 
 * 
*/
/* eslint no-console: 0 */

'use strict';

// console.log(JSON.stringify(Object.keys(merge(require("lodash"), require("underscore")))))

const fs = require("fs");
// const { describe, before, after } = require("mocha");
const { expect } = require("chai");

describe('[Parser tests] ', () => {

  before(() => {
    // fs.writeFileSync('.env', envFile);
  });

  after(() => {
    // fs.unlinkSync('.env');
  });

  it('should ', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should ', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

});


// // LOWDASH
// _.chunk
// _.compact
// _.concat
// _.difference
// _.differenceBy
// _.differenceWith
// _.drop
// _.dropRight
// _.dropRightWhile
// _.dropWhile
// _.fill
// _.findIndex
// _.findLastIndex
// _.first
// _.head
// _.flatten
// _.flattenDeep
// _.flattenDepth
// _.fromPairs
// _.head
// _.indexOf
// _.initial
// _.intersection
// _.intersectionBy
// _.intersectionWith
// _.join
// _.last
// _.lastIndexOf
// _.nth
// _.pull
// _.pullAll
// _.pullAllBy
// _.pullAllWith
// _.pullAt
// _.remove
// _.reverse
// _.slice
// _.sortedIndex
// _.sortedIndexBy
// _.sortedIndexOf
// _.sortedLastIndex
// _.sortedLastIndexBy
// _.sortedLastIndexOf
// _.sortedUniq
// _.sortedUniqBy
// _.tail
// _.take
// _.takeRight
// _.takeRightWhile
// _.takeWhile
// _.union
// _.unionBy
// _.unionWith
// _.uniq
// _.uniqBy
// _.uniqWith
// _.unzip
// _.unzipWith
// _.without
// _.xor
// _.xorBy
// _.xorWith
// _.zip
// _.zipObject
// _.zipObjectDeep
// _.zipWith
// _.countBy
// _.each
// _.forEach
// _.eachRight
// _.forEachRight
// _.every
// _.filter
// _.find
// _.findLast
// _.flatMap
// _.flatMapDeep
// _.flatMapDepth
// _.forEach
// _.forEachRight
// _.groupBy
// _.includes
// _.invokeMap
// _.keyBy
// _.map
// _.orderBy
// _.partition
// _.reduce
// _.reduceRight
// _.reject
// _.sample
// _.sampleSize
// _.shuffle
// _.size
// _.some
// _.sortBy
// _.now
// _.after
// _.ary
// _.before
// _.bind
// _.bindKey
// _.curry
// _.curryRight
// _.debounce
// _.defer
// _.delay
// _.flip
// _.memoize
// _.negate
// _.once
// _.overArgs
// _.partial
// _.partialRight
// _.rearg
// _.rest
// _.spread
// _.throttle
// _.unary
// _.wrap
// _.castArray
// _.clone
// _.cloneDeep
// _.cloneDeepWith
// _.cloneWith
// _.conformsTo
// _.eq
// _.gt
// _.gte
// _.isArguments
// _.isArray
// _.isArrayBuffer
// _.isArrayLike
// _.isArrayLikeObject
// _.isBoolean
// _.isBuffer
// _.isDate
// _.isElement
// _.isEmpty
// _.isEqual
// _.isEqualWith
// _.isError
// _.isFinite
// _.isFunction
// _.isInteger
// _.isLength
// _.isMap
// _.isMatch
// _.isMatchWith
// _.isNaN
// _.isNative
// _.isNil
// _.isNull
// _.isNumber
// _.isObject
// _.isObjectLike
// _.isPlainObject
// _.isRegExp
// _.isSafeInteger
// _.isSet
// _.isString
// _.isSymbol
// _.isTypedArray
// _.isUndefined
// _.isWeakMap
// _.isWeakSet
// _.lt
// _.lte
// _.toArray
// _.toFinite
// _.toInteger
// _.toLength
// _.toNumber
// _.toPlainObject
// _.toSafeInteger
// _.toString
// _.add
// _.ceil
// _.divide
// _.floor
// _.max
// _.maxBy
// _.mean
// _.meanBy
// _.min
// _.minBy
// _.multiply
// _.round
// _.subtract
// _.sum
// _.sumBy
// _.clamp
// _.inRange
// _.random
// _.assign
// _.assignIn
// _.assignInWith
// _.assignWith
// _.at
// _.create
// _.defaults
// _.defaultsDeep
// _.entries
// _.toPairs
// _.entriesIn
// _.toPairsIn
// _.extend
// _.assignIn
// _.extendWith
// _.assignInWith
// _.findKey
// _.findLastKey
// _.forIn
// _.forInRight
// _.forOwn
// _.forOwnRight
// _.functions
// _.functionsIn
// _.get
// _.has
// _.hasIn
// _.invert
// _.invertBy
// _.invoke
// _.keys
// _.keysIn
// _.mapKeys
// _.mapValues
// _.merge
// _.mergeWith
// _.omit
// _.omitBy
// _.pick
// _.pickBy
// _.result
// _.set
// _.setWith
// _.toPairs
// _.toPairsIn
// _.transform
// _.unset
// _.update
// _.updateWith
// _.values
// _.valuesIn
// _
// _.chain
// _.tap
// _.thru
// _.prototype[Symbol.iterator]
// _.prototype.at
// _.prototype.chain
// _.prototype.commit
// _.prototype.next
// _.prototype.plant
// _.prototype.reverse
// _.prototype.toJSON //-> value
// _.prototype.value
// _.prototype.valueOf // -> value
// _.camelCase
// _.capitalize
// _.deburr
// _.endsWith
// _.escape
// _.escapeRegExp
// _.kebabCase
// _.lowerCase
// _.lowerFirst
// _.pad
// _.padEnd
// _.padStart
// _.parseInt
// _.repeat
// _.replace
// _.snakeCase
// _.split
// _.startCase
// _.startsWith
// _.template
// _.toLower
// _.toUpper
// _.trim
// _.trimEnd
// _.trimStart
// _.truncate
// _.unescape
// _.upperCase
// _.upperFirst
// _.words
// _.attempt
// _.bindAll
// _.cond
// _.conforms
// _.constant
// _.defaultTo
// _.flow
// _.flowRight
// _.identity
// _.iteratee
// _.matches
// _.matchesProperty
// _.method
// _.methodOf
// _.mixin
// _.noConflict
// _.noop
// _.nthArg
// _.over
// _.overEvery
// _.overSome
// _.property
// _.propertyOf
// _.range
// _.rangeRight
// _.runInContext
// _.stubArray
// _.stubFalse
// _.stubObject
// _.stubString
// _.stubTrue
// _.times
// _.toPath
// _.uniqueId
// _.VERSION
// _.templateSettings
// _.templateSettings.escape
// _.templateSettings.evaluate
// _.templateSettings.imports
// _.templateSettings.interpolate
// _.templateSettings.variable
// _.templateSettings.imports._

// // UNDERSCORE

// // Collections
// _.each
// _.map
// _.reduce
// _.reduceRight
// _.find
// _.filter
// _.where
// _.findWhere
// _.reject
// _.every
// _.some
// _.contains
// _.invoke
// _.pluck
// _.max
// _.min
// _.sortBy
// _.groupBy
// _.indexBy
// _.countBy
// _.shuffle
// _.sample
// _.toArray
// _.size
// _.partition

// // Arrays
// _.first
// _.initial
// _.last
// _.rest
// _.compact
// _.flatten
// _.without
// _.union
// _.intersection
// _.difference
// _.uniq
// _.zip
// _.unzip
// _.object
// _.chunk
// _.indexOf
// _.lastIndexOf
// _.sortedIndex
// _.findIndex
// _.findLastIndex
// _.range

// // Functions
// _.bind
// _.bindAll
// _.partial
// _.memoize
// _.delay
// _.defer
// _.throttle
// _.debounce
// _.once
// _.after
// _.before
// _.wrap
// _.negate
// _.compose
// _.restArguments

// // Objects
// _.keys
// _.allKeys
// _.values
// _.mapObject
// _.pairs
// _.invert
// _.create
// _.functions
// _.findKey
// _.extend
// _.extendOwn
// _.pick
// _.omit
// _.defaults
// _.clone
// _.tap
// _.toPath
// _.has
// _.get
// _.property
// _.propertyOf
// _.matcher
// _.isEqual
// _.isMatch
// _.isEmpty
// _.isElement
// _.isArray
// _.isObject
// _.isArguments
// _.isFunction
// _.isString
// _.isNumber
// _.isFinite
// _.isBoolean
// _.isDate
// _.isRegExp
// _.isError
// _.isSymbol
// _.isMap
// _.isWeakMap
// _.isSet
// _.isWeakSet
// _.isArrayBuffer
// _.isDataView
// _.isTypedArray
// _.isNaN
// _.isNull
// _.isUndefined

// // Utility
// _.noConflict
// _.identity
// _.constant
// _.noop
// _.times
// _.random
// _.mixin
// _.iteratee
// _.uniqueId
// _.escape
// _.unescape
// _.result
// _.now
// _.template
// // OOP Style
// Chaining
// _.chain
// _.value
