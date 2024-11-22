import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom';

const ProtectedRoute = (  ) => {
    const isAuthenticated = false;
  return isAuthenticated ? <Outlet/> :<Navigate to="/login"/>
  //outlet is the place where children render . so her children is about 
}

export default ProtectedRoute
