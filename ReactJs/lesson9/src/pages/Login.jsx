import React, {useRef} from 'react'
import {useNavigate} from  'react-router-dom'

const Login = () => {

    const user = {
        userName : 'Narmin', 
        password : 'nermin1'
    }

    const location = useNavigate()

    const submitForm = (e)=>{
       e.preventDefault()
       if(user.userName === name.current.value && user.password === pass.current.value){
        localStorage.setItem('User', JSON.stringify(user))
        location('/admin')
        window.location.reload()
       }
       else{
        alert('yox')
       }
    }

    // const chechUser = () =>{
    //     const data = localStorage.getItem('User')
    //     if(data){
    //         setItems([])
    //     }
    //     else{
    //         location('/login')
    //     }
    // }

    // onclick = {chechUser}

    // useRef

    const name = useRef()
    const pass = useRef()

  return (
    <>
<div className="container mt-5">
     <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" ref={name}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" ref={pass} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
</div>
  

    </>
  )
}

export default Login