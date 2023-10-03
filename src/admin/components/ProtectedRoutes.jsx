import Navscroll from "../../components/Navscroll"
import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from "react-redux";
const ProtectedRoutes = () => {

const {user} = useSelector((state) => state.auth);

return(
user!==null && user.role==="admin" ? <><Navscroll/><Outlet/></> : <Navigate
to="/login"/>
)
}
export default ProtectedRoutes