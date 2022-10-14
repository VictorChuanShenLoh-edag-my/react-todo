import React, { Fragment, useState } from "react";
import "./ToDoList.css";
import NewToDo from "../NewToDo/NewToDo";
import { Todo } from "../ToDo.model";

const ToDoList = () => {
  const [ToDoList, setToDoList] = useState<Map<string, Todo>>(new Map());
  const [editTodo, setEditTodo] = useState<Todo>();
  const [isEdit, setIsEdit] = useState(false);

  const toSetToDoList = (data: Todo) => {
    setToDoList(new Map(ToDoList.set(data.id, data)));
    setIsEdit(false);
  };

  const toMarkComplete = (id: string) => {
    let todo = ToDoList.get(id);
    if (todo) {
      todo.completed = true;
    }
  };

  const onDeleteTodo = (id: string) => {
    toMarkComplete(id);

    ToDoList.delete(id);
    setToDoList(new Map(ToDoList));
  };

  const toDoListContent = Array.from(ToDoList?.values()).map((item) => (
    <div
      key={item.id}
      className={`${item.completed ? "completed" : "pending"}`}
    >
      {item.title}
      <button onClick={() => onDeleteTodo(item.id)} disabled={isEdit}>
        Complete
      </button>
      <button
        onClick={() => {
          setEditTodo(item);
          setIsEdit(true);
        }}
        disabled={isEdit}
      >
        Edit
      </button>
    </div>
  ));

  return (
    <Fragment>
      <NewToDo onAddClicked={toSetToDoList} editTodo={editTodo} />
      <h1>{ToDoList?.size} Todos</h1>
      {toDoListContent}
    </Fragment>
  );
};
export default ToDoList;
