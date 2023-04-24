export interface Product {
  name: string;
  brand: string;
  color: string;
}

export interface ProductNewFeature {
  speed: string;
}

export interface ICard {
  name: string;
  image: string;
  link: string;
  description: string;
}

export type FinalProducts = Product & ProductNewFeature;
// export interface ProductNewFeature extends Product {
//   speed?: "100km/h";
// }
