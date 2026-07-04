import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import TodoItems from "./components/TodoItems";

function App() {
  
  const[todoItems, setTodoItems]=useState([])
  const handleNewItem=(itemName,itemDueDate)=>{
      setTodoItems((currValue)=>[
      ...currValue,
      {name: itemName, dueDate: itemDueDate}
    ]);

  };
    const handleDeleteItem=(todoItemName)=>{
      const newTodoItems=todoItems.filter(item =>item.name !== todoItemName);
      setTodoItems(newTodoItems);
    };
  
  return ( 
  <center className="todo-container">
   <AppName></AppName>
   <AppTodo onNewItem={handleNewItem}></AppTodo>
   {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>} 
   <TodoItem todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItem>
 </center>

  );
};

export default App;
