import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const Home = () => {


  const [user, setUser] = useState({
    email: '',
    userName: '',
    pass: ''
  })

  const submitForm = (e) => {
    e.preventDefault()
    console.log(user);
    toast.warning('Successfully updated')
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="container">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">User Name</label>
              <input type="text" className="form-control" name='userName' onChange={handleChange} />
            </div>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" name='email' onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='pass' onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      

    </>
  )
}

export default Home