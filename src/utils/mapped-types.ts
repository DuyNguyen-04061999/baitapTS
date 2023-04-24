// type Developer = {
//   name: string;
// } & Record<string, any>;

export interface Developer {
  name: string;
  [key: string]: string | number | boolean;
}
const duy: Developer = {
  name: "Duy",
  age: 29,
  gender: "Male",
  school: "ngu",
  isGood: true,
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
  // những thuộc tính của Type đều có giá trị là boolean
};

interface FeatureFlags {
  darkMode: () => void;
  newUserProfile: () => void;
}

type FeatureOptions = OptionsFlags<FeatureFlags>;
// Mapping modifier

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]; //bỏ đi readonly và giữ các giá trị
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// remove optional
type Animal<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type AnimalShop = {
  id?: number;
  name?: string;
  age?: number;
};

type PetShop = Animal<AnimalShop>;

// //
// type Getters<Type> = {
//   [Property in Extract<
//     keyof Type,
//     string
//   > as `on${Capitalize<Property>}Change`]: Type[Property];
// };
// type Getters<Type> = {
//   [Property in keyof Type as `on${Capitalize<
//     string & Property // bắt buộc Property phải là string
//   >}Change`]: Type[Property];
// };

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

// type LazyPerson = Getters<Person>;
// onNameChange;
// onAgeChange;
// onLocationChange;

// const person = {
//   name: "John",
//   age: 30,
// };
// type Person = typeof person;
// type PersonProperty = keyof Person;

// const propertyName: PersonProperty = "name";

// const propertyValue: Person[PersonProperty] = person[propertyName];
// console.log(propertyValue); //john

// type Getters<Type> = {
//   [Property in keyof Type as `on${Capitalize<
//     Extract<Property, string>
//   >}Change`]: (value: Type[Property]) => Type[Property];
// }
// type Getters<Type> = {
//   [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
//     value: Type[Property]
//   ) => Type[Property];
// }
type Getters<Type> = {
  [Property in Extract<
    keyof Type,
    string
  > as `on${Capitalize<Property>}Change`]: (
    value: Type[Property]
  ) => Type[Property];
} & {
  [Property in Extract<
    keyof Type,
    string
  > as `on${Capitalize<Property>}Focus`]: (
    value: Type[Property]
  ) => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

const personLazy: LazyPerson = {
  onAgeChange: (value: number) => value,
  onNameChange: (value: string) => value,
  onLocationChange: (value: string) => value,
  onAgeFocus: (value: number) => value,
  onNameFocus: (value: string) => value,
  onLocationFocus: (value: string) => value,
};

// type RemoveKindField<Type> = {
//   [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
// // };
// type RemoveKindField<Type> = {
//   [Property in Exclude<keyof Type, "kind">]: Type[Property];
// };

// interface Circle {
//   kind: "shining";
//   radius: number;
// }

// type KindlessCircle = RemoveKindField<Circle>;
// type EventConfig<Events extends { kind: string }> = {
//   [E in Events as E["kind"]]: (event: E) => void;
// };

// type SquareEvent = { kind: "square"; x: number; y: number };
// type CircleEvent = { kind: "circle"; radius: number };

// type Config = EventConfig<SquareEvent | CircleEvent>;

// const config: Config = {
//   square: () => {},
//   circle: () => {},
// };

// config.square({ kind: "square", x: 3, y: 10 });
// config.circle({ kind: "circle", radius: 20 });

// type RemoveKindField<Type> = {
//   [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
// };
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

const obj: ObjectsNeedingGDPRDeletion = {
  id: false,
  name: true,
};
