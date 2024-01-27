@module("./data.mjs")
external one: {..} = "one"

@module("./data.mjs")
external two: {..} = "two"

let compareLargeObjects = () => {
  if (one == two) === true {
    Console.error("Values match when they should not")
  }
  if (one == one) === false {
    Console.error("one Values did not match when they should")
  }
  if (one->Object.copy == one->Object.copy) === false {
    Console.error("two Values did not match when they should")
  }
}
