import _ from 'lodash-es'
import { one, two } from './small-data.mjs'

export const lodashCompareSmallObjects = () => {
    if (_.isEqual(one, two) === true) console.error("Values match when they should not")
    if (_.isEqual(one, one) === false) console.error("one Values did not match when they should")
    if (_.isEqual(Object.assign({}, two), Object.assign({}, two)) === false) console.error("two Values did not match when they should")
}