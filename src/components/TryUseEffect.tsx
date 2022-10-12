import userEvent from "@testing-library/user-event";
import { Fragment, useState, useEffect } from "react";

interface ToDo {
    id?: number
}

export default function TryUseEffect() {
  console.log('Inside Function');
  const [data, setData] = useState<ToDo[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  const fetchData = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/todos/");
    setData(await api.json());
    console.log(data);
  };

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    alert('Hello')
  }, [isClicked]);

  return <Fragment>{data.map(x=> <div key={x.id}>{x.id}</div>)}</Fragment>;
};


