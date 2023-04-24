//function overloading: function trùng tên, số lượng tham số như nhau nhưng khác nhau type và return type
// function total(a: number, b: number): number;
// function total(a: string, b: string): string;

// function total(a: any, b: any) {
//   return a + b;
// }
// total(1, 2);
// total("a", "b");

// interface Coordinate {
//   x: number;
//   y: number;
// }

// function parseCoordinate(obj: Coordinate): Coordinate;
// function parseCoordinate(x: number, y: number): Coordinate;

// function parseCoordinate(arg1: any, arg2?: any): Coordinate {
//   let coor = {
//     x: arg1 as number,
//     y: arg2 as number,
//   };
//   if (typeof arg1 === "object") {
//     coor = { ...(arg1 as Coordinate) };
//   }

//   return coor;
// }

//Type casting as
//Type assertion as

// asertion

// let myVariable: any = "Hello World";
// let myString: string = myVariable as string;

// //normal Fn
// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// //arrow fn
// const addString = (x: string, y: string): string => {
//   return `${x}${y}`;
// };

// //default parameters
// function addNumbersWithDefaultParams(a: number = 10, b: number = 20): number {
//   return a + b;
// }
// addNumbersWithDefaultParams();

// //union types
// function format(
//   title: string,
//   description: string,
//   amount: string | number
// ): string {
//   return `${title} ${description} ${amount}`;
// }
// format("duy", "duy", 123);
// format("duy", "duy", "123");

// //void functions
// function contact(email: string, phone: number): void {
//   console.log(email, phone);
//   return;
// }

// //promise functions
// const fetchData = (url: string): Promise<string> =>
//   Promise.resolve(`Get data from ${url}`);

// //rest paramters
// function information(id: number, ...names: string[]) {
//   return `${id} ${names.join(" ")}`;
// }

// information(9, "asdas", "12312");

// //with callback
// function handleFind(text: string, callback: () => void): void {
//   console.log(text);
//   callback();
// }

// //function params with params
// //type function
// type UpdateArray = (n: number) => number;

// function handleUpdateArray(numbers: number[], update: UpdateArray): number[] {
//   return numbers.map((item) => update(item));
// }
// handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5); // [5, 10, 15, 20, 25];

// //fn return function
// function handleValue(val: number): (n: number) => number {
//   //   function returnNum(n: number) {
//   //     return n * val;
//   //   }
//   return (n: number) => n * val;
// }
// const value = handleValue(5);
// value(10);
