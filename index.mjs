import Benchmark from 'benchmark'

import { compareLargeObjects } from "./src/rescript.res.mjs"
import { lodashCompareLargeObjects } from "./src/lodash.mjs"
import { deCompareLargeObjects } from './src/deep-equal.mjs'
import { imCompareLargeObjects } from './src/immutable.mjs';
import { fdeCompareLargeObjects } from './src/fast-deep-equal.mjs';

var suite = new Benchmark.Suite;

// add tests
suite.add('ReScript#caml_obj', function () {
  compareLargeObjects()
})
  .add('lodash#isEqual', function () {
    lodashCompareLargeObjects()
  })
  .add('deep-equal#deep-equal', function () {
    deCompareLargeObjects()
  })
  .add('immutable#equals', function () {
    imCompareLargeObjects()
  })
  .add('fast-deep-equal#deep-equal', function () {
    fdeCompareLargeObjects()
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });