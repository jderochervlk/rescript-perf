@module("./data.mjs")
external one: {..} = "one"

@module("./data.mjs")
external two: {..} = "two"

let compareLargeObjects = () => {
  let _ = one == two
}
