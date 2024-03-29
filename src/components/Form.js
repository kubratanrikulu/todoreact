import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todo, setTodo }) => {
    const changeTaskArea = (event) => {
        setInput(event.target.value)
    }
    const formSubmit = (event) => {
        event.preventDefault();
        setTodo([...todo, { id: uuidv4(), title: input, completed: false }])
       
        setInput("")
    }
    const handleClear = ( ) => {
        const filtered = todo.filter((item) => {
          return !item.completed;
        })
        setTodo(filtered)
      }
    return (
        <form onSubmit={formSubmit}>
            <div className='row mt-4'>
                <div className='col-12 col-lg-8'>
                    <input type="text" placeholder='Enter Task..' className='input-task shadow w-100  mb-5 bg-body rounded p-2 px-3 border-0' value={input} onChange={changeTaskArea} />
                </div>
                <div className='col-12 col-lg-4 d-flex justify-content-evenly'>
                    <button className='task-add border-0 text-white p-2 rounded shadow mb-5 px-3' type='submit'>Add</button>
                    <button className='task-clear border-0 text-white p-2 rounded shadow px-3 mb-5' type='submit' onClick={handleClear} >Clear-All</button>
                </div>
            </div>
        </form>
    )
}

export default Form