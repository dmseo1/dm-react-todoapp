import React, {useState, useEffect, useReducer} from 'react';  //useState: 상태 유지 값과 그 값을 갱신하는 함수를 반환
import './App.css';
import Header from './components/Header'
import List from './components/List'
import { render } from '@testing-library/react';
import UseFetch from './utils/UseFetch'
import { todoReducer } from './utils/TodoReducer'
import { TodoStore } from './utils/TodoStore'

export const TodoContext = React.createContext([]);


function App({initialCount = 0}) {

  //useEffect : 클래스 기반의 componentDidMount와 동일한 기능을 수행

  
  


  const [todos, setTodos] = useState([]); //setTodos는 todos에 대한 setState의 역할을 한다. 하지만 함수를 넣을 수 있는 등 setState보다 더 많은 역할을 한다.
  const [newTodo, setNewTodo] = useState('');  //입력 중에 가지고 있게만 함
  const loading = UseFetch(setTodos, 'http://localhost:8008/api/todo')

  const changeInputData = (e) => {  //e target: 
    setNewTodo(e.target.value);
  }
  
  const addTodo = async (e) => {
    e.preventDefault(); //화면이 새로고침되는 것을 막는다
    
    const details = {
      id: String(todos.length + 1),
      title: newTodo,
      status: 'todo'
    }

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    console.log("formbody: " + formBody);


    // fetch('http://localhost:8008/api/todo', {
    //   method : 'POST',
    //   headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
    //   body: formBody
    // }).then(response => {
    //   console.log(response.json())
    //   setTodos([...todos, {title: newTodo, id: String(todos.length  + 1), status: 'todo'}]) //...todos : todos에 있는 것들을 그대로 가지고 옴
    
    // });

     var writer = await fetch('http://localhost:8008/api/todo', {
        method : 'POST',
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        body: formBody
      });

    var inputData = await writer.json();
    await console.log(inputData);
    await setTodos([...todos, {title: newTodo, id: String(todos.length  + 1), status: 'todo'}]);
  }

  const changeTodoStatus = (id) => {
    
    
    var updateTodos = todos.map(data => {
      if(id === data.id) {
        if(data.status === "todo") {
          data.status = "done";
        } else {
          data.status = "todo";
        }
      }
      return data;
    });

    console.log("바꾼 결과: " + updateTodos);
    setTodos(updateTodos); 
   
  }
 

  useEffect(() => {
    //console.log(`새로운 내용이 입력되었습니다: ${todos}`);
  }, [todos]) //뒷 옵션 안 주면, useEffect 내용이 계속 반복. 뒷 옵션을 줘야 한 번만 렌더링된다.


 
  return (
    <div className="App">
      <h1>Todo Application</h1>
      
      <TodoStore>
        <Header />

          <form method="POST">
          <input type="text" onChange={changeInputData}/>
          <button onClick={addTodo}>할 일 추가</button>
          </form>
        
        <List />
      </TodoStore>
    </div>
  );
}




export default App;
