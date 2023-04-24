// interface Todo {
//   title: string;
//   description: string;
//   date: string;
//   author: string;
// }

// type NewTodo = Partial<Todo>;

// export function updateTodo(todo: Todo, newTodo: NewTodo) {
//   return {
//     ...todo,
//     ...newTodo,
//   };
// }
// console.log(
//   updateTodo(
//     {
//       title: "Learn JS",
//       description: "LEarn JS in 6 months",
//       date: "14/4/2023",
//       author: "Duy",
//     },
//     {}
//   )
// );

// interface Props {
//   isActive?: boolean;
//   color?: string;
// }

// const compA: Props = {};

// const compB: Required<Props> = {
//   isActive: true,
//   color: "red",
// };
//readonly
// interface Book {
//   title: string;
// }
// const game: Readonly<Book> = {
//   title: "The life of game",
// };

//Record<Keys, Type>
//key:value

// interface CatInfo {
//   age: number;
//   breed: string;
// }
// type typeRecord = [number, string];

// type CatName = "miffy" | "boris" | "mordred";

// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: "Persian" },
//   boris: { age: 5, breed: "Maine Coon" },
//   mordred: { age: 16, breed: "British Shorthair" },
// };
// const newRecord: Record<number, typeRecord> = {
//   1: [20, "â"],
//   2: [30, "iloveu"],
// };

// cats.boris;

// Pick<Type, Keys>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };
// Omit<Type, Keys>

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description" | "title">;

// const todo: TodoPreview = {
//   completed: false,
//   createdAt: 1615544252770,
// };
// Exclude<UnionType, ExcludedMembers>

interface Props {
  isActive?: boolean;
  color?: string;
}

const compA: Props = {};

type newProps = Required<Props>;
const compB: newProps = {
  isActive: true,
  color: "red",
};
