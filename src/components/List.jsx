import React from 'react';
import Item from '../components/Item';
import { TodoContext } from '../utils/TodoStore';

const List = () => {
    const {todos, loading} = React.useContext(TodoContext)
    var todoLists = <h1>Todo List is now loading...</h1>
    if(!loading) {
        todoLists = todos.map(data => { return <Item todo={data} key={data.id}> {data.title} </Item> });
    }
    return (
        <div>
            <ul>          
                {todoLists}
            </ul>
        </div>
    );
}

export default List;