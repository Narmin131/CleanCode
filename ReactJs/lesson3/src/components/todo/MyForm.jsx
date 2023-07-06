import React, { useState } from 'react'

const MyForm = ({ myTodos, setMyTodos }) => {

  const [todo, setTodo] = useState('')

  const submitForm = (e) => {
    e.preventDefault()

    if (todo == '') {
      alert('Please fill all the places')
    }

    setMyTodos([...myTodos, todo])
    setTodo('')
    console.log(todo);
  }

  return (
    <>
      <div className="container mt-3">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <input type="text" className="form-control" onChange={(e) => setTodo(e.target.value)} value={todo} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  )
}

export default MyForm