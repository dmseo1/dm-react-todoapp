import React ,{useEffect ,useReducer }from 'react';
import  UseFetch  from '../utils/UseFetch'
import {todoReducer} from '../utils/TodoReducer';

export const TodoContext = React.createContext();

export const TodoStore = (props) => {

    const [mTodos, dispatch] = useReducer(todoReducer, []);
    const setInitData = (initData) => {
      dispatch({type: 'SET_INIT_DATA', payload: initData});
    }
    const loading = UseFetch(setInitData, 'http://localhost:8008/api/todo');
  
    useEffect(() => {
      //console.log("새로운 내용이 입력되었습니다", mTodos);
    }, [mTodos]);

    console.log("가지고 온 내용:");
    console.log(mTodos);
  
    return (
      <TodoContext.Provider value = {{mTodos,dispatch,loading}}>
        {props.children}
      </TodoContext.Provider>
    )
}