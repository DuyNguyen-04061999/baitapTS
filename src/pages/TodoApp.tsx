import React, { useReducer, useRef } from "react";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
};

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

interface Todo {
  id: number;
  text: string;
}

const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.length, text: action.text }];

    case "REMOVE":
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw new Error("");
  }
};

const initialState: Todo[] = [];

const TodoApp = () => {
  const [toDos, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const onRemoveTodo = (todoId: number) => {
    dispatch({ type: "REMOVE", id: todoId });
  };

  const onAddTodo = () => {
    if (inputRef.current?.value) {
      dispatch({ type: "ADD", text: inputRef.current.value });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  
  return (
    <>
      <Heading title="Todo App" />
      <div className="max-w-sm">
        <div className="mb-5">
          {toDos.map((e) => (
            <div className="flex items-center gap-x-3" key={e.id}>
              <span>{e.text}</span>
              <button
                onClick={() => onRemoveTodo(e.id)}
                className="p-2 rounded-lg bg-red-500 text-white font-medium text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            ref={inputRef}
            className="p-4 border border-slate-200 rounded-lg outline-none"
          />
          <button
            onClick={onAddTodo}
            className="p-4 rounded-lg bg-blue-500 text-white text-center outline-none"
          >
            Add to do
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
