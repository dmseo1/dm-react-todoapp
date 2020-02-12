import React, { useContext } from 'react';
import { TodoContext } from '../utils/TodoStore';

const Header = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div>
            <h5>해야할 일이 {todos.filter(data => data.status === "todo").length}개 있습니다.</h5>
        </div>
    );
}

export default Header;
