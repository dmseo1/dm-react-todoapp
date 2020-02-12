import React, { useContext, useRef } from 'react';
import { TodoContext } from '../utils/TodoStore';

const Form = () => {

    const {dispatch} = useContext(TodoContext);
    const inputRef = useRef(null);
    const addTodo = (e) => {
        e.preventDefault();
        dispatch({type : "ADD_TODO", payload : inputRef.current.value});
        inputRef.current.value = "";
    }

    return (
        <form method="POST">
            <input type="text" className="" ref={inputRef} />
            <button className="" onClick={addTodo}>할 일 추가</button>
        </form>
    );
}

export default Form;