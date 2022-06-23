import React from 'react';
 
const Todolist = ({todo, setTodo}) => {
  const handleTodo = (comparedId) =>{
    const selectedTodo = todo.find((td)=>{
      return td.id === comparedId
    })
    const todoCopy = todo.filter((td)=>{
      return td.id !== comparedId
    })
    selectedTodo.completed = !selectedTodo.completed
    todoCopy.push(selectedTodo)
    setTodo(todoCopy)
  }
   return (
       <div className='todo-list'>
         <div className="item-wrapper">
         {todo.map ((item) => (
            <div className={item.completed ? "done" : ""} onClick={()=>{handleTodo(item.id)}} key={item.id}> {item.title} </div>
            ))}
         </div>
       </div>
   );
};
 
export default Todolist;