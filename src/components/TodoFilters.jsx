import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { BiListUl } from 'react-icons/bi'
import { CgPlayListCheck, CgPlayListRemove } from 'react-icons/cg'

const TodoFilters = ({ todos, setCurrentTodos }) => {
    const [doneTodosCount, setDoneTodosCount] = useState(0);
    const [undoneTodosCount, setUndoneTodosCount] = useState(0);
    const [allTodosCount, setAllTodosCount] = useState(0);
    const [todosCopy, setTodosCopy] = useState([]);

    const filterDone = () => { 
        setCurrentTodos(todosCopy.filter(todo => todo.isComplete))
    }

    const filterUndone = () => {
        setCurrentTodos(todosCopy.filter(todo => !todo.isComplete))
    }

    const filterAll = () => {
        setCurrentTodos(todos);
    }

    useEffect(() => {   
        setDoneTodosCount(todos.filter(todo => todo.isComplete).length);
        setUndoneTodosCount(todos.filter(todo => !todo.isComplete).length);
        setAllTodosCount(todos.length);
        setTodosCopy(todos)
    }, [todos])

    return (   
        <ul className='filters'>
            <li className='filter-button filter-done' onClick={filterDone}>
                <CgPlayListCheck className='filter-icon filter-icon--done' />
                <span className='counter counter-done'>{doneTodosCount}</span>
            </li>
            <li className='filter-button filter-undone' onClick={filterUndone}>
                <CgPlayListRemove className='filter-icon filter-icon--undone' />
                <span className='counter counter-undone'>{undoneTodosCount}</span>
            </li>
            <li className='filter-button filter-all' onClick={filterAll}>
                <BiListUl className='filter-icon filter-icon--all' />
                <span className='counter counter-all' >{allTodosCount}</span>
            </li>
        </ul>
    );
}

TodoFilters.propTypes = {
    todos: PropTypes.array, 
    setCurrentTodos: PropTypes.func, 
}

export default TodoFilters;