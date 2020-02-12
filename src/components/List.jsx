import React from 'react'
import Item from '../components/Item'
import { TodoContext } from '../utils/TodoStore'

const List = () => {
    const {mTodos, loading, changeTodoStatus} = React.useContext(TodoContext)
    console.log("MTODOS", mTodos);
    var todoLists = <h1>Todo List is now loading...</h1>
    
    if(!loading) {
        todoLists = mTodos.map(data => { return <Item todo={data} key={data.id} changeTodoStatus={changeTodoStatus}> {data.title} </Item> })
    }
   

    return (
        <div>
            <ul>
               
                {todoLists}
              
            </ul>
        </div>
    )
}

export default List