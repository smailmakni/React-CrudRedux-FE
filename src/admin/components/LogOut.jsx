import {useEffect} from 'react';
import { useNavigate} from 'react-router-dom'
import { useDispatch} from "react-redux";
import { logout, reset } from "../../features/AuthSlice";
import { authSlice } from '../../features/AuthSlice';
import { useSelector } from 'react-redux';

const Logout = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const { user } = useSelector((state) => state.auth) 

useEffect(() => {
dispatch(logout())
}, [user]);
return (
<div>
</div>
)
};
export default Logout;