import React from 'react'

const Header = ({todos}) => {
    return (
        <div>
            <h5>해야 할 일이 {todos.length}개 있습니다.</h5>
        </div>
    )
}

export default Header
