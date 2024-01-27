import Benchmark from 'benchmark'

import { compareSmallObjects } from "./src/small_rescript.res.mjs"
import { lodashCompareSmallObjects } from "./src/small-lodash.mjs"
import { deCompareSmallObjects } from './src/small-deep-equals.mjs'
import { imCompareSmallObjects } from './src/small-immutable.mjs';
import { fdeCompareSmallObjects } from './src/small-fast-deep-equals.mjs';

var suite = new Benchmark.Suite

// add tests
suite.add('ReScript#caml_obj', function () {
    compareSmallObjects()
})
    .add('lodash#isEqual', function () {
        lodashCompareSmallObjects()
    })
    .add('deep-equal#deep-equal', function () {
        deCompareSmallObjects()
    })
    .add('immutable#equals', function () {
        imCompareSmallObjects()
    })
    .add('fast-deep-equal#deep-equal', function () {
        fdeCompareSmallObjects()
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