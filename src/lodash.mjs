import _ from 'lodash-es'
import { one, two } from './data.mjs'

export const lodashCompareLargeObjects = () => {
    const _t = _.isEqual(one, two)
}