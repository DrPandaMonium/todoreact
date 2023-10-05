import { useState, useEffect } from 'react';
import NewForm from './NewForm';
import TodoList from './TodoList';

import './styles.css';

const App = () => {

    const [todos, setTodo] = useState(() => {
        const localValue = localStorage.getItem('ITEMS')
        if (localValue == null) {
            return []
        }
        
        return JSON.parse(localValue)
    });

    // store in local storage
    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(todos))
    }, [todos])

    const addTodo = (title) => {
        setTodo((currentTodo) => {
            return [...currentTodo, {id: crypto.randomUUID(), title, completed: false}]
        })
    }

    const deleteTodo = (id) => {
        setTodo(currentTodo => {
            return currentTodo.filter(todo => todo.id !== id)
        })
    }

    const toggleTodo = (id, completed) => {
        setTodo(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed}
                }

                return todo
            })
        })
    }

    return (
        <>
            <NewForm onSubmit={addTodo} />
            <h1 className='header'>Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </>
    )
}

export default App;