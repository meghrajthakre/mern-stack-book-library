import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './components/Home' ;
import About from './components/About';
import AddBook from './components/AddBook';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import Books from './components/book/Books';
import BookDetail from './components/book/BookDetail';
import './App.css';

function App() {
  return (
    <>
      <Router>

        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add' element={<AddBook/>} />
            <Route path='/books' element={<Books/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/books/:id' element={<BookDetail/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>

      </Router>
    
    
    
    </>
  );
}

export default App;
