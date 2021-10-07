import React, { useState } from "react";
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoFilters from "./TodoFilters";


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [currentTodos, setCurrentTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        setCurrentTodos(newTodos);
    }

    const deleteTodo = id => {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(removeItem);
        setCurrentTodos(removeItem);
    }

    const changeTodoState = id => {
        const checkTodo = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(checkTodo);
        setCurrentTodos(checkTodo);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
        setCurrentTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    return (
        <div className='todo-list'>
            <TodoForm onSubmit={addTodo} />
            <TodoFilters todos={todos} setCurrentTodos = {setCurrentTodos} />
            {currentTodos.slice(0).reverse().map(todo =>
                <Todo 
                    todo={todo} 
                    key={todo.id} 
                    deleteTodo={() => deleteTodo(todo.id)} 
                    changeTodoState={() => changeTodoState(todo.id)}
                    updateTodo = {updateTodo}
                />
            )}
        </div>
    )
}

export default TodoList