import React, {useState, useEffect} from 'react';  //useState: 상태 유지 값과 그 값을 갱신하는 함수를 반환
import './App.css';
import Header from './components/Header'
import List from './components/List'
import { render } from '@testing-library/react';
import UseFetch from './utils/UseFetch'



function App({initialCount = 0}) {

  //useEffect : 클래스 기반의 componentDidMount와 동일한 기능을 수행


  const [todos, setTodos] = useState([]); //setTodos는 todos에 대한 setState의 역할을 한다. 하지만 함수를 넣을 수 있는 등 setState보다 더 많은 역할을 한다.
  const [newTodo, setNewTodo] = useState('');  //입력 중에 가지고 있게만 함
  const loading = UseFetch(setTodos, 'http://localhost:8008/api/todo')

  const changeInputData = (e) => {  //e target: 
    setNewTodo(e.target.value);
  }
  
  const addTodo = (e) => {
    e.preventDefault(); //화면이 새로고침되는 것을 막는다
    setTodos([...todos, {title: newTodo, id: String(todos.length  + 1), status: 'todo'}]) //...todos : todos에 있는 것들을 그대로 가지고 옴
    
    console.log(`TODOs: ${todos}`);
  }

  const changeTodoStatus = (id) => {
    var updateTodos = todos.filter(e => e.id === id)


    /**
     * 
     * 
     * 
     * 
     *  내 일 처 리
     * 
     * 
     * 
     * 
     */


    console.log(updateTodos);
  }
 

  useEffect(() => {
    console.log(`새로운 내용이 입력되었습니다: ${todos}`);
  }, [todos]) //뒷 옵션 안 주면, useEffect 내용이 계속 반복. 뒷 옵션을 줘야 한 번만 렌더링된다.



  return (
    <div className="App">
      <h1>Todo Application</h1>

      <Header todos={todos} />

        <form>
         <input type="text" onChange={changeInputData}/>
         <button onClick={addTodo}>할 일 추가</button>
        </form>
      <List todos={todos} changeTodoStatus={changeTodoStatus} />
      
    </div>
  );
}




export default App;
