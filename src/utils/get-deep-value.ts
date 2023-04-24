// function getDeepValue<T, K extends keyof T>(
//   obj: T,
//   firstKey: K,
//   secondKey?: string
// ) {
//   return obj[firstKey];
// }

const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    c: false,
    d: 30,
  },
};

function getDeepValue<T, K extends keyof T, C extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: C
) {
  return obj[firstKey][secondKey];
}
const obj2 = {
  foo: "a",
};
getDeepValue(obj, "baz", "c");
// nested object
// log(obj, "foo", "a") => true
