import React, { useReducer, useState } from "react";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
};

interface IToDoListItem {
  id: number;
  text: string;
}

const initialState: IToDoListItem[] = [];

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

const todoReducer = (state: IToDoListItem[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.length, text: action.text }];
    case "REMOVE":
      return state.filter((e) => e.id !== action.id);
    default:
      return state;
  }
};

const TodoApp2 = () => {
  const [toDoList, dispatch] = useReducer(todoReducer, initialState);

  const [value, setValue] = useState<string>("");
  
  const onRemove = (id: number) => {
    dispatch({ type: "REMOVE", id });
  };
  const onAdd = () => {
    dispatch({ type: "ADD", text: value });
    setValue("");
  };
  return (
    <>
      <Heading title="Todo App" />
      <div className="max-w-sm">
        {toDoList.map((e) => (
          <div className="mb-5" key={e.id}>
            <div className="flex items-center gap-x-3">
              <span>{e?.text}</span>
              <button
                onClick={() => onRemove(e.id)}
                className="p-2 rounded-lg bg-red-500 text-white font-medium text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex items-center gap-x-5">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="p-4 border border-slate-200 rounded-lg outline-none"
          />
          <button
            onClick={onAdd}
            className="p-4 rounded-lg bg-blue-500 text-white text-center outline-none"
          >
            Add to do
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoApp2;
