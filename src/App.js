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
import ProtectedRoutes from './admin/components/ProtectedRoutes';
import PublicRoutes from "./admin/components/PublicRoutes";
import Dashboard from './admin/components/Dashboard';
import  Menus from './admin/components/Menus';



function App() {
  return (
     <Router>
    <Routes>
    <Route element={<ProtectedRoutes/>}>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path='/' element={<Navscroll/>}/>
    <Route path='/articles/getArticles' element={<ListArticles/>}/>
    <Route path='/scategories/getScategories' element={<ListScategories/>}/>
    <Route path='/adminArticles' element={<ProductsAppAdmin/>}/>
    <Route path='/menu' element={<Menus/>}/>
    
    </Route>
    <Route element={<PublicRoutes/>}>
      
    <Route path='/pay/:total' element={<StripePayement/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Route>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="*" element={<p>Page Not Found: 404!</p>} />
    </Routes>
  </Router>
  
  );
}

export default App;
