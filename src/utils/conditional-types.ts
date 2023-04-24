//condition ? true : false

//someType extends otherType ? trueType : falseType

type someType<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : any;
type someValue = someType<number>; //number

type someValue2 = someType<number>; //string

type MyExclude<T, U> = T extends U ? never : T;
// never: never occurs
type T0 = MyExclude<"a" | "b" | "c", "a">; //type T0 = "b" | "c"
// T: union: "a" | "b" | "c"
// U: "a"
// "a" extends "a" ? never : "a"
// "b" extends "a" ? never : "b"
// "c" extends "a" ? never : "c"
type MyExtract<T, U> = T extends U ? T : never;

type TExtract = MyExtract<"a" | "b" | "c", "a">;
// T: union: "a" | "b" | "c"
// "a" extends "a" ? "a" : never
// "b" extends "a" ? "b" : never
// "c" extends "a" ? "c" : never

// type MyInfer<T> = T extends string ? string : any;
// type MyInfer2<T> = T extends number ? number : any;

type MyInfer<T> = T extends infer R ? R : any;

type UseMyInfer = MyInfer<string>;
type UseMyInfer2 = MyInfer<boolean>;
type UseMyInfer3 = MyInfer<{
  age: number;
}>;

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type Infer = Flatten<string>; //string

type UseFlatten = Flatten<number[]>; //number[]

type Result = boolean extends true ? 1 : 0;

const func = (check: boolean) => {
  return "231231";
};

type FuncResult = ReturnType<typeof func>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type Example = MyReturnType<() => number>;

type GetReturnType<Type> = Type extends (...args: never[]) => infer R
  ? R
  : never;

type Num = GetReturnType<() => 9>;
type StringArray = Array<string>;

// type OptionsFlag<Type> = {
//   [Property in Extract<
//     keyof Type,
//     string
//   > as `on${Capitalize<Property>}Change`]: Type[Property];
// };
type OptionsFlag<Type> = {
  [Property in keyof Type]: Type[Property] extends () => void
    ? Property
    : never;
}[keyof Type];

// 1.string &
// 2. Extract trong Capitalize
// 3. keyof

interface MyStudent {
  name: string;
  age: number;
  updateName(): void;
}

type MyStudentConditional = OptionsFlag<MyStudent>;

// rewrite NonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T;
type useMyNonNullable = MyNonNullable<null | undefined | string>;

type UseParameter = Parameters<(a: number, b: number) => {}>;
// type UseParameter = [a: number, b: number]
