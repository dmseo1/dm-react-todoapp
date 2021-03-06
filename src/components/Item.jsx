import React, {useContext} from 'react';
import {TodoContext} from '../utils/TodoStore';
import '../css/Item.css';


const Item = ({todo}) => {

    const { dispatch } = useContext(TodoContext);
    
    const toggleItem = (e) => {
        const id = e.target.dataset.id;
        dispatch({type:"CHANGE_TODO_STATUS", payload: id});
    }

    const itemClassName = (todo.status === 'done') ? 'done' : '';
    return (
        <div>
            <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>{todo.title}</li>
        </div>
    );
}

export default Item;