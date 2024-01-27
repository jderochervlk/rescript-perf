import equal from 'fast-deep-equal/es6'
import { one, two } from './data.mjs'

export const fdeCompareLargeObjects = () => {
    if (equal(one, two) === true) console.error("Values match when they should not")
    if (equal(one, one) === false) console.error("one Values did not match when they should")
    if (equal(Object.assign({}, two), Object.assign({}, two)) === false) console.error("two values did not match when they should")
}