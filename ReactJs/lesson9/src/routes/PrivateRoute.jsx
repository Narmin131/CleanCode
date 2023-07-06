import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import {authUser} from "../utils/Util"
const PrivateRoute = () => {
  
  
    if(authUser()){
        return <Outlet/>
    }
    else{
        return <Navigate to='/login'/>
    }
    


}

export default PrivateRoute