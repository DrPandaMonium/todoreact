import React from "react";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo}) => {
    return (
        <li key={id}>
            <label>
                <input type='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
            </label>
            <button className='btn' onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}

export default TodoItem