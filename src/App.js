import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Paginas/Contacto';
import Productos from './components/Paginas/Productos';


function App() {
  return (
    <BrowserRouter>
      <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
          {/* 
          <ItemListContainer/>
          <ItemDetailContainer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
