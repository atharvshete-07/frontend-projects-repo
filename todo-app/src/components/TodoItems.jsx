import { MdDelete } from "react-icons/md";
function TodoItems({todoname, tododate, onDeleteClick}){
    return(
       <div className="container text-center">
  <div className="row">
    <div className="col-4">{todoname}</div>
    <div className="col-4">{tododate}</div>
    <div className="col-2">
      <button type="button" className="btn btn-danger" onClick={()=> onDeleteClick(todoname)}><MdDelete/></button>
    </div>
  </div>
  </div>
    );
};
export default TodoItems;