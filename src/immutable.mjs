import { fromJS } from "immutable"
import { one, two } from "./data.mjs"

export const imCompareLargeObjects = () => {
    const _one = fromJS(one)
    const _two = fromJS(two)

    let _t = _one.equals(_two)
}