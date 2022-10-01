import React, { useState } from 'react';
import Todo from './Todo';
import TodoFroms from './TodoFroms';


const TodoList = () => {
    const [todos, setTodos] = useState([])
    const addTodos = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)     
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        } 
        setTodos(prev => prev.map(iteams => (iteams.id === todoId ? newValue : iteams)))
    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todos.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        }) 
        setTodos(updateTodos)
    }
    return (
        <div>
            <h2>Hello form todolist</h2>
            <TodoFroms onSubmit={addTodos}></TodoFroms>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}></Todo>
        </div>
    );
};

export default TodoList;