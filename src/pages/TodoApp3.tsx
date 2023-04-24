import { KeyboardEvent, useEffect, useReducer, useState } from "react";

const storedData = localStorage.getItem("todoList");
const initialState: ITodoItem[] = storedData ? JSON.parse(storedData) : [];

interface ITodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface IOnCompleted extends ITodoItem {
  onCompleted?: () => void;
}

type ActionType =
  | {
      type: "ADD";
      payload: ITodoItem;
    }
  | {
      type: "COMPLETED";
      payload: ITodoItem[];
    }
  | { type: "CLEAR"; payload: [] };

const reducerTodo = (state: ITodoItem[], action: ActionType) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }

    case "COMPLETED": {
      return [...action.payload];
    }

    case "CLEAR": {
      return [...action.payload];
    }

    default:
      return state;
  }
};

const TodoApp3 = () => {
  // {
  //     id: 1,
  //     name: "lau nha",
  //     isCompleted: false
  // }
  const [todoList, dispatch] = useReducer(reducerTodo, initialState);
  const [value, setValue] = useState<string>("");
  const completedList = todoList.filter((e) => e.isCompleted);
  const progressList = todoList.filter((e) => !e.isCompleted);
  const onKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      onAdd();
    }
  };
  const onAdd = () => {
    if (value) {
      dispatch({
        type: "ADD",
        payload: {
          id: todoList.length,
          name: value,
          isCompleted: false,
        },
      });
      setValue("");
    }
  };

  const onCompleted = (id: number) => {
    const task = todoList.find((e) => e.id === id);
    if (task) {
      task.isCompleted = true;
      console.log(todoList);

      dispatch({ type: "COMPLETED", payload: todoList });
    }
  };
  const onClearAll = () => {
    dispatch({ type: "CLEAR", payload: [] });
  };
  useEffect(() => {
    localStorage && localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <div className="w-full flex items-center gap-5">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          onKeyUp={onKeyUp}
          className="border border-gray-400 flex-grow px-2 py-3 outline-none"
        />
        <button
          onClick={onAdd}
          disabled={!value}
          className="bg-gray-400 py-3 px-2 text-white font-semibold"
        >
          Add
        </button>
      </div>

      <div>
        {todoList.length > 0 && (
          <>
            <div className="flex gap-8 mt-5">
              <div className="basis-1/2">
                <h2 className="font-semibold text-2xl uppercase">
                  Công việc đang làm
                </h2>
                {progressList.map((e) => (
                  <TodoItem
                    key={e.id}
                    {...e}
                    onCompleted={() => onCompleted(e.id)}
                  />
                ))}
              </div>
              <div className="basis-1/2">
                <h2 className="font-semibold text-2xl uppercase">
                  Công việc hoàn thành
                </h2>
                {/* <div className="border border-gray-500 px-2 py-3 mt-4 bg-gray-200">
                <span className="line-through">Lau nhà</span>
              </div> */}
                {completedList.map((e) => (
                  <TodoItem key={e.id} {...e} />
                ))}
              </div>
            </div>
            <button
              onClick={onClearAll}
              className="ml-auto block bg-pink-500 text-white py-3 px-2 rounded mt-5"
            >
              Clear All
            </button>
          </>
        )}
      </div>
    </>
  );
};

const TodoItem = ({ isCompleted, name, onCompleted }: IOnCompleted) => {
  return (
    <div
      className={`border border-gray-500 flex justify-between items-center px-2 py-3 mt-4 ${
        isCompleted ? "bg-gray-200" : ""
      }`}
    >
      <span className={`${isCompleted ? "line-through" : ""}`}>{name}</span>
      {!isCompleted && (
        <button className="px-2 bg-gray-400" onClick={onCompleted}>
          ✓
        </button>
      )}
    </div>
  );
};

export default TodoApp3;
