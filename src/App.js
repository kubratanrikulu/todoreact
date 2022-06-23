
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todolist from './components/Todolist';


function App() {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  return (
    <div className="App">
      <div className='container'>
        <div className='row justify-content-center'>
        <div className='w-75  mt-3 border border-light py-5 bg-white shadow p-3 mb-5 bg-body rounded'>
        <Header />
        <Form
          input={input}
          setInput= {setInput}
          todo = {todo}
          setTodo= {setTodo}
         />
         <Todolist todo = {todo} setTodo= {setTodo}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
