import react from 'react'
import "./App.css"
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput'
import { useState } from 'react';
//import todoList from './component/TodoList';

function App(){
  const [listTodo,setListTodo]= useState([]);
  let addList = (inputText)=>{
    if(inputText!==' ')
    setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    console.log(key);
    console.log(newListTodo);
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
  }
  return(
    <div className='main-container'>
              <div className='centre-container'>
                <TodoInput addList= {addList}/>
                <h1 className='="app-heading'>TODO</h1>
                <hr/>
                {listTodo.map((listItem, i) => {
                  return (
                      <TodoList key={i} item={listItem} deleteItem={deleteListItem} index={i}/>
                  );
                })}
              </div>
            </div>
   /* <div className='main-container'>
     <div className='centre-container'>
      <TodoInput addList= {addList}/>
      <h1 className='="app-heading'>TODO</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return{
         // <TodoList key={i} item={listItem}/>
         console.log();
        }
      })}
     </div>
    </div>*/

  )
}




/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
