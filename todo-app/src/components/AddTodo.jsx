import{useRef} from 'react';
import { MdAddBox } from "react-icons/md";
import styles from "./AddTodo.module.css";

function AddTodo({onNewItem}){
  const todoNameElement=useRef();
  const dueDateElement=useRef();

const handleAddButtonClicked=(event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    onNewItem(todoName,dueDate);

  }
    return (
    <div className="container text-center">
 
  <form className="row"
    onSubmit={handleAddButtonClicked}>
    <div className="col-4">
      <input className={styles.input} type="text" ref={todoNameElement} placeholder="Enter Todo here"></input>
    </div>
    <div className="col-4">
      <input className={styles.input} type="date" ref={dueDateElement}></input>
    </div>
    <div className="col-2">
      <button classNames={styles.input} type="submit" className="btn btn-success"><MdAddBox /></button>
      
    </div>
  </form>
  </div>
    );
};
export default AddTodo;