import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item'>
        {props.item}
        <span className='icons'>
            <i className="fa-solid fa-trash-can icon-delete"
            onClick={e=>{
                console.log('abcdef'+props.index);
                props.deleteItem(props.index);
            }}></i>
        </span>
    </li>
    //<div>todoList</div>
  )
}

export default TodoList;