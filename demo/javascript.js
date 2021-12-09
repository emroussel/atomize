// This is a comment
import * as module1 from "module1";
import module2, { module3 } from "module2And3";
const fetch = require("fetch");

/* This is another comment */

const SOME_CONSTANT = "SOME_CONSTANT";
let object = {
  string: "String",
  number: 123,
  float: 123.321,
  boolean: true,
  null: null,
  undefined: undefined,
  array: ["123", "456"],
  date: new Date(),
  function: (array = null) =>
    Array.isArray(array) ? array.reverse() : undefined,
  [module2.dynamicKey]: module2.value,
};

object.function(object.array);

console.log(`Constant: ${SOME_CONSTANT}`);

let num;

if (process.env.NODE_ENV === "production") {
  for (const i = 0; i < module1.some.nested.array.length; i++) {
    if (
      module1.some.nested.array[i] < object.number ||
      module1.some.nested.array[i] - num > object.number
    ) {
      num += i;
      break;
    } else if (module1.some.nested.array[i] === object.number && !num) {
      num -= 1;
    } else {
      for (const property in object) {
        num =
          typeof property === "number" ? Math.floor(num + property) : num + 3;
      }
    }
  }
} else {
  num = Object.keys(object)
    .filter(Boolean)
    .reduce((acc, value) => [...acc, value], []).length;
}

let data = {};

try {
  async function fetchSomething({ url, options: optionsAlias }) {
    const res = await fetch(url, { options: optionsAlias });

    res.json().then((resData) => {
      data = resData?.maybe?.some?.property ?? { default: "default" };
    });

    if (!data) {
      throw new Error("Oh no");
    }
  }

  fetchSomething({ url: "https://123.com" });
} catch (error) {
  if (error instanceof Error) {
    return error;
  }
}

class MyClass extends module3 {
  property = "some property";

  static somethingStatic(value) {
    if (typeof value == "string") {
      return value.test(/^(^https?:\/\/.*)|(^mailto:.*)|(^tel:.*)/i);
    }

    return !!value;
  }

  constructor() {
    super();
  }

  someMethod(...params) {
    (params || []).forEach((param) => {
      this.property += param;
    });
  }
}

MyClass.somethingStatic();

var instance = new MyClass();

instance.someMethod(data);

export default num;

module.exports = {};
