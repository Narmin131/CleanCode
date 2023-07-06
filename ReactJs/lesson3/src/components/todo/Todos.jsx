import React from 'react'

const Todos = ({ myTodos, setMyTodos }) => {


  const deleteTodoItem = (item) => {
    const filteredArray = myTodos.filter((todo) => todo !== item)
    setMyTodos(filteredArray)
  }



  return (
    <>
      <ol>
        {
          myTodos?.map((item, index) => {
            return <li><button onClick={() => deleteTodoItem(item)}>Delete button</button>{item}</li>
          })
        }
      </ol>

    </>
  )
}

export default Todos