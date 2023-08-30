import React, { useEffect,useCallback } from "react";
import { useDispatch } from "react-redux";
import {getScategories} from "../../features/ScategoriesSlice";
import AfficheScategories from "./AfficheScategories";

const ListScategories = () => {

const dispatch = useDispatch();
const initFetch = useCallback(() => {
dispatch(getScategories());
}, [dispatch])
useEffect(() => {
initFetch()
}, [initFetch])

return (
<div>

<AfficheScategories/>

</div>
)
}
export default ListScategories