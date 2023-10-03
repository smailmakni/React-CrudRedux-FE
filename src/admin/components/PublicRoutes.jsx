import Cart from '../../components/ArticlesRedux/Cart';
import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from "react-redux";
const PublicRoutes = () => {

const {user} = useSelector((state) => state.auth);

return(
user!==null && user.role==="user" ? <><Cart/><Outlet/></> : <Navigate
to="/login"/>
)
}
export default PublicRoutes