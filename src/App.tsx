import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import ArticlesList from './components/ArticlesList';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import ArticleDetails from './components/ArticleDetails';
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<ArticlesList />}></Route>
      <Route path='/article/:id' element={<ArticleDetails />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
