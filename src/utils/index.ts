import { FinalProducts, Product } from "./interface";

export function total(a: number, b: number): number {
  return a + b;
}
total(5, 7);
//const variable: dataTypes = value
const age: number = 30;
const name: string = "Duy";
const school: string = "acasd";

function raiseError(err: string): never {
  throw new Error(err);
}
function reject(): never {
  return raiseError("Error");
}
let loop = function forever(): never {
  while (true) {
    console.log("Hello world");
  }
};

const product: FinalProducts = {
  name: "car",
  brand: "bmw",
  color: "red",
  speed: "123km/h",
};
function addProduct(product: FinalProducts) {
}

addProduct(product);
