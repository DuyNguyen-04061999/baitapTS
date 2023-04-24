import { String, Union } from "ts-toolbelt";

const query = `home?name=evondev&age=28`;

type FirstQuery = String.Split<typeof query, "?">[1];

type SecondQuery = String.Split<FirstQuery, "&">;

type QueryParams = {
  [Q in SecondQuery[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[SecondQuery[number]];

type UnionMerge = Union.Merge<QueryParams>;
const obj: UnionMerge = {
  name: "evondev",
  age: "28",
};
// type a = {
//   name: "evondev";
//   age: "28";
// };
