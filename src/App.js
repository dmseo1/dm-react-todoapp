import React from 'react'; 
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import { TodoStore } from './utils/TodoStore';

function App() {
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoStore>
        <Header />
        <Form />
        <List />
      </TodoStore>
    </div>
  );
}

export default App;
