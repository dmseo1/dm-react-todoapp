import React,{useContext} from 'react'
import { TodoContext } from '../utils/TodoStore'

const Header = () => {
    const { mTodos, loading }   = useContext(TodoContext);

    return (
        <div>
            <h5>해야 할 일이 {mTodos.filter(data => data.status === "todo").length}개 있습니다.</h5>
        </div>
    )
}

export default Header
