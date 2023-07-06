import React from 'react'
import {NavLink} from "react-router-dom"
import {authUser} from "../utils/Util"
const AuthBtn = () => {


    const data = JSON.parse(localStorage.getItem('User'))

    const logOut  = ()=>{
        localStorage.clear()
        window.location.reload()
    }

    const auth = ()=>{
        if(authUser()){
            return(
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   {data.userName}
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Dashboard</a></li>
                  <li onClick={logOut}>Log Out</li>
                </ul>
              </div>        
            )
        }
        else{
            return(
                <NavLink to='/login'>Login</NavLink>
            )
        }
    }




  return (
    <>
         {auth()}
    </>
  )
}

export default AuthBtn