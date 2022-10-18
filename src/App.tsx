import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import ToDoList from "./components/ToDo/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <ToDoList></ToDoList>
      </ChakraProvider>
    </div>
  );
}

export default App;
