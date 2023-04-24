// in
function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  }
  if ("age" in obj) {
    console.log(obj.age);
  }
}

//
const myStudent = {
  id: 1,
  age: 28,
  name: "tuan",
};

type Student = keyof typeof myStudent;
