import equal from 'deep-equal'
import { one, two } from './data.mjs'

export const deCompareLargeObjects = () => {
    let _t = equal(one, two)
}