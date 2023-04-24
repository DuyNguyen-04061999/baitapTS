export type Age = 18 | 30 | 40;

//union type typeA | typeB
//intersection types & typeA & typeB
interface IBusinessPartner {
  name: string;
  credit: number;
}
interface IIdentity {
  id: number;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}

type Employee = IIdentity & IContact;
type Customer = IBusinessPartner & IContact;
type Other = IContact | IIdentity;

let duy: Employee = {
  id: 1,
  name: "Duy",
  email: "duy@gmail.com",
  phone: "076781231",
};

let hung: Customer = {
  name: "Hung",
  credit: 2323,
  email: "asd@Gmail.com",
  phone: "q3123",
};

let other: Other = {
  email: "DUy",
  phone: "q2312321",
  id:12312
};

