import './App.css';
import ListArticles from './components/ArticlesRedux/ListArticles';
import ListScategories from './components/ScategoriesRedux/ListScategories';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
    <Route path='/articles/getArticles' element={<ListArticles/>}/>
    <Route path='/scategories/getScategories' element={<ListScategories/>}/>
    </Routes>
  </Router>
  );
}

export default App;
