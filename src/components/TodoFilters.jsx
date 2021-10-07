import React, { useEffect, useState } from 'react';
import { BiListUl } from 'react-icons/bi'
import { CgPlayListCheck, CgPlayListRemove } from 'react-icons/cg'

function TodoFilters({ todos, setCurrentTodos }) {
    const [doneCount, setDoneCount] = useState(0);
    const [undoneCount, setUndoneCount] = useState(0);
    const [allCount, setAllCount] = useState(0);
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
        setDoneCount(todos.filter(todo => todo.isComplete).length);
        setUndoneCount(todos.filter(todo => !todo.isComplete).length);
        setAllCount(todos.length);
        setTodosCopy(todos)
    }, [todos])

    return (   
        <ul className='filters'>
            <li>
                <CgPlayListCheck className='filter-button filter-done' onClick={filterDone} />
                <span className='counter counter-done'>{doneCount}</span>
            </li>
            <li>
                <CgPlayListRemove className='filter-button filter-undone' onClick={filterUndone} />
                <span className='counter counter-undone'>{undoneCount}</span>
            </li>
            <li>
                <BiListUl className='filter-button filter-all' onClick={filterAll} />
                <span className='counter counter-all' >{allCount}</span>
            </li>
        </ul>
    );
}

export default TodoFilters;