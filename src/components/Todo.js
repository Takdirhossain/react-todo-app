import React, { useState } from 'react';
import TodoFroms from './TodoFroms'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
        })

        const submitUpdate = value => {
            updateTodo(edit.id, value)
            setEdit({
                id:null,
                value: ''
            });
            
            }
            if(edit.id){
                return <TodoFroms eidt={edit} onSubmit={submitUpdate}></TodoFroms>
        }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 
        'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
                <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} />
            </div>
        </div>
    ))
};

export default Todo;