import React, { Fragment, useState } from "react";
import "./ToDoList.css";
import NewToDo from "../NewToDo/NewToDo";
import { Todo } from "../ToDo.model";
import { SearchToDo } from "../SearchToDo/SearchToDo";
import { ToDo } from "../ToDo/ToDo";

const ToDoList = () => {
  const [ToDoList, setToDoList] = useState<Map<string, Todo>>(new Map());
  let [filteredToDoList, setFilteredToDoList] = useState<Map<string, Todo>>(new Map());
  const [filterText, setFilterText] = useState("");
  const [editTodo, setEditTodo] = useState<Todo>(new Todo());
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
  const onEditClickHandler = (item: Todo) => {
    setEditTodo(item);
    setIsEdit(true);
  }
  const onDeleteClickHandler = (id: string) => {
    onDeleteTodo(id);
  }
  const filterToDoHandler = (arg: string) => {
    setFilterText(() => arg);
  };

  if (filterText === "") {
    filteredToDoList = ToDoList;
  } else {
    filteredToDoList = new Map(
      Array.from(ToDoList).filter(([key, value]) => {
        if (value.title.includes(filterText)) {
          return true;
        }
        return false;
      })
    );
  }

  const toDoListContent = Array.from(filteredToDoList?.values()).map((item) => (
    <ToDo key={item.id} item={item} isEdit={isEdit} onEditClick={onEditClickHandler} onDeleteClick={onDeleteClickHandler}/>
  ));

  return (
    <div className="todo-body">
      <NewToDo onAddClicked={toSetToDoList} editTodo={editTodo} />
      <SearchToDo filterToDo={filterToDoHandler}></SearchToDo>
      <h1>{filteredToDoList?.size} Todos</h1>
      {toDoListContent}
    </div>
  );
};
export default ToDoList;
