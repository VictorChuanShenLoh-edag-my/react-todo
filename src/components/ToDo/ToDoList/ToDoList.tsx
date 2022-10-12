import React, { Fragment, useState } from "react";
import "./ToDoList.css";
import NewToDo from "../NewToDo/NewToDo";
import { Todo } from "../ToDo.model";

const toDoData: Todo[] = [
  { id: "asd123", title: "Cook Lunch", completed: false },
  { id: "asd222", title: "Do House Chores", completed: false },
];
const ToDoList = () => {
  const [ToDoList, setToDoList] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<Todo>();
  const [isEdit, setIsEdit] = useState(false);

  const findListIndex = (data: Todo): number => {
    return ToDoList.findIndex((x) => {
      return x.id === data.id;
    });
  };

  const toSetToDoList = (data: Todo) => {
    let newList;
    const index = findListIndex(data);
    if (index !== -1) {
      newList = [...ToDoList];
      newList[index] = data;

      setToDoList(newList);
    } else {
      setToDoList([...ToDoList, data]);
    }
    setIsEdit(false);
  };

  const toMarkComplete = (id: string) => {
    let newList;
    const index = ToDoList.findIndex((x) => {
      return x.id === id;
    });
    if (index !== -1) {
      newList = [...ToDoList];
      newList[index].completed = true;

      setToDoList(newList);
    }
  };

  const removeObjectWithId = (arr: Todo[], id: string) => {
    arr = arr.filter((x) => x.id !== id);
    return arr;
  };

  const onDeleteTodo = (id: string) => {
    toMarkComplete(id);
    //setTimeout(() => {
      setToDoList(removeObjectWithId(ToDoList, id));
    //}, 2000);
  };

  return (
    <Fragment>
      <NewToDo onAddClicked={toSetToDoList} editTodo={editTodo} />
      <h1>{ToDoList.length} Todos</h1>
      {ToDoList.map((item) => (
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
      ))}
    </Fragment>
  );
};
export default ToDoList;
