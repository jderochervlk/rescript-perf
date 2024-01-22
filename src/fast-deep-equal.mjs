import equal from 'fast-deep-equal/es6'
import { one, two } from './data.mjs'

export const fdeCompareLargeObjects = () => {
    let _t = equal(one, two)
}