import React from 'react'
import Item from '../components/Item'

const List = ({todos, loading, changeTodoStatus}) => {
    var todoLists = <h1>Todo List is now loading...</h1>
    if(!loading) {
        todoLists = todos.map(data => { return <Item todo={data} key={data.id} changeTodoStatus={changeTodoStatus}> {data.title} </Item> })
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