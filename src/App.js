import './App.css';
import ListArticles from './components/ArticlesRedux/ListArticles';
import ListScategories from './components/ScategoriesRedux/ListScategories';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import Navscroll from './components/Navscroll'
import Cart from './components/ArticlesRedux/Cart';
import StripePayement from './components/ArticlesRedux/StripePayement';
import Logout from "./admin/components/LogOut"
import Register from "./admin/components/Register"
import Login from './admin/components/Login';
import { useSelector } from "react-redux";



function App() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  return (
     <Router>
    {isLoggedIn? <Navscroll /> :<Login/> }
   
    <Routes>
    <Route path='/home' element={<Navscroll/>}/>
    <Route path='/articles/getArticles' element={<ListArticles/>}/>
    <Route path='/scategories/getScategories' element={<ListScategories/>}/>
    <Route path='/adminArticles' element={<ProductsAppAdmin/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/pay/:total' element={<StripePayement/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="*" element={<p>Page Not Found: 404!</p>} />
    </Routes>
  </Router>
  
  );
}

export default App;
