import React ,{ useReducer }from 'react';
import  useFetch  from '../utils/UseFetch';
import { todoReducer } from '../utils/TodoReducer';

export const TodoContext = React.createContext();

export const TodoStore = (props) => {

    const [todos, dispatch] = useReducer(todoReducer, []);
    
    const setInitData = (initData) => {
      dispatch({type: 'SET_INIT_DATA', payload: initData});
      
    }
    const loading = useFetch(setInitData, 'http://localhost:8008/api/todo');
  
    return (
      <TodoContext.Provider value = {{todos, dispatch, loading}}>
        {props.children}
      </TodoContext.Provider>
    )
}