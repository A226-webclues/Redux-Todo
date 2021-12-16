import React, { useState } from 'react';
import { addTodo, editTodo, deleteTodo, removeAll, checkItem, checked, unChecked, showAll, editItem} from './Action/indexAction';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {

const [inputData, setInputData] = useState('');
const [toggleSubmit, setToggleSubmit] = useState(true);
const list = useSelector((state) => state.indexRed.list);
const dispatch = useDispatch();
const [editId,setEditId] = useState("");

    return (
    <>
        <h2> ToDo List </h2>
        
            <div className="addItems">
                <input type="text" placeholder="✍ Add List..." 
                    value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    &nbsp;
                    {
                        toggleSubmit ? <button onClick={() => {dispatch(addTodo(inputData),setInputData(''))}}>Add</button> :
                                       <button onClick={() => dispatch(editItem(editId, inputData),
                                               setToggleSubmit(true),setInputData(""))}>
                                               Update
                                       </button>
                    } 
                    
                    &nbsp;
                    <br />
                    <br />
                
                    <button onClick={() => dispatch(checked())}>Checked</button>&nbsp;
                    <button onClick={() => dispatch(unChecked())}>UnChecked</button>&nbsp;
                    <button onClick={() => dispatch(showAll())}>All</button>
            </div>
            <br />            

            <div className="showItems">
                    {
                        list.map((elem , id) => {
                             return(
                                <div className="eachItem" key={elem.id}>

                                    <h3>
                                    <input type="checkbox"
                                                onChange={() => {dispatch(checkItem(elem.isChecked = !elem.isChecked))}}
                                     />
                                                {elem.data}</h3>
                                    <button onClick = {() => {dispatch(editTodo(elem.id),
                                            setInputData(elem.data),
                                            setToggleSubmit(false),
                                            setEditId(elem.id))}}>Edit
                                    </button> &nbsp;
                                    <button onClick = {() => {dispatch(deleteTodo(elem.id))}}>Delete</button>
                                </div>
                            )
                        }) 
                    } 
                </div>     

            <br />
            <div className="removeall">
                <button onClick = {() => dispatch(removeAll())}>RemoveAll</button>
            </div> 
            
        
    </>
    );
}

export default Todo;