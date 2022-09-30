import React, { useState } from 'react';

const TodoFroms = () => {
    const [input, setInput] = useState('')

    const handaleSubmit = e => {
        e.preventDefault();
    }
    return (
        <form className='todo-from' onSubmit={handaleSubmit}>
            <input type="text" placeholder='Add A Todo' name='todo' className='todo-input' value={input} />
            <button>Add Todo</button>
        </form>
    );
};

export default TodoFroms;