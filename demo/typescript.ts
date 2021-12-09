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
  function: (array: Array<any> = null) =>
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
        num = typeof property === "number" ? num + property : num + 3;
      }
    }
  }
} else {
  num = Object.keys(object)
    .filter(Boolean)
    .reduce<string[]>((acc, value) => [...acc, value], []).length;
}

let data = {};

interface FetchOptions {
  anOption?: number | null | undefined;
}

type SomeType = keyof FetchOptions;

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type PartialFetchOptions = Partial<FetchOptions>;

try {
  async function fetchSomething({
    url,
    options: optionsAlias,
  }: {
    url: string;
    options?: PartialFetchOptions & { option1: () => SomeType };
  }) {
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

enum MyEnum {
  option1 = 1,
  option2,
  option3,
}

class MyClass extends module3 implements module2 {
  private property = "some private property";
  public publicProperty = "some public property";

  static somethingStatic(value?: string | number): MyEnum {
    if (!!value.test(/^(^https?:\/\/.*)|(^mailto:.*)|(^tel:.*)/i)) {
      return MyEnum.option1;
    }
  }

  constructor() {
    super();
  }

  someMethod(...params): void {
    (params || []).forEach((param) => {
      this.property += param;
    });
  }
}

MyClass.somethingStatic();

var instance = new MyClass();

instance.someMethod(data);

export default num;
