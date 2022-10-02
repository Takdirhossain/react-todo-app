import React, { useEffect, useRef, useState } from 'react';

const TodoFroms = (props) => {
    const [input, setInput] = useState( )
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })

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
        <form className='todo-form' onSubmit={handaleSubmit}>
            <input type="text" placeholder='Add A Todo' name='todo' className='todo-input' value={input} onChange={hamdleChange}
            ref={inputRef}
            />
            <button className='todo-button'>Add Todo</button>
        </form>
    );
};

export default TodoFroms;