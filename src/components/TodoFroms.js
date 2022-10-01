import React, { useState } from 'react';

const TodoFroms = (props) => {
    const [input, setInput] = useState('')

    const hamdleChange = e => {
        setInput(e.target.value)
    }
    const handaleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')
    }
    return (
        <form className='todo-from' onSubmit={handaleSubmit}>
            <input type="text" placeholder='Add A Todo' name='todo' className='todo-input' value={input} onChange={hamdleChange}/>
            <button>Add Todo</button>
        </form>
    );
};

export default TodoFroms;