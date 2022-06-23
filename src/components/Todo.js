import React from 'react';

const Todo = ({ todo }) => {
    return (
        <div className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    );
};

export default Todo;