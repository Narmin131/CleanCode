import React, { useEffect, useState } from 'react'
import MyForm from "../components/todo/MyForm"
import Todos from "../components/todo/Todos"


const About = () => {


  const [myTodos, setMyTodos] = useState(localStorage.getItem('myTodos') ? JSON.parse(localStorage.getItem('myTodos')) : [])

  console.log(myTodos);

  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(myTodos))
  }, [myTodos])


  return (
    <>
      <MyForm myTodos={myTodos} setMyTodos={setMyTodos} />
      <Todos myTodos={myTodos} setMyTodos={setMyTodos} />
    </>
  )
}

export default About