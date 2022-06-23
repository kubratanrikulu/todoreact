import React from 'react';
import Todo from './Todo';
 
const Todolist = ({todo, setTodo}) => {
   return (
       <div className='todo-list'>
          {todo.map ((todo) => (
            <li className='item' key={todo.id}>
              <input 
              type="text"
              value= {todo.title}
              className= "list"
              onChange={(event) => event.preventDefault()}/>
            </li>
            ))}
       </div>
   );
};
 
export default Todolist;