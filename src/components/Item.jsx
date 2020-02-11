import React from 'react'

const Item = ({todo, changeTodoStatus}) => {

    const toggleItem = (e) => {
        const id = e.target.dataset.id;
        changeTodoStatus(id);
    }

    const itemClassName = (todo.status === 'done') ? 'done' : ''
    return (
        <div>
            <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>{todo.title}</li>
        </div>
    )
}

export default Item
