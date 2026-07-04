import TodoItems from "./TodoItems";
import styles from "./itemContainer.module.css";
const TodoItem=({todoItems, onDeleteClick})=>{
    return(
    <div className={styles.itemsContainer}>
        {todoItems.map((item)=>(
           <TodoItems key={item.name} todoname={item.name} tododate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItems> 
        ))}
</div>
    );
};
export default TodoItem;