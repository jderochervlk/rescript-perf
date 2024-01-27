import { fromJS } from "immutable"
import { one, two } from "./small-data.mjs"

export const imCompareSmallObjects = () => {
    const _one = fromJS(one)
    const _two = fromJS(two)

    if (_one.equals(_two) === true) console.error("immutable: Values match when they should not")
    if (_one.equals(_one) === false) console.error("immutable: one Values did not match when they should")
    if (_two.equals(fromJS(two)) === false) console.error("immutable: two values did not match when they should")
}