import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './components/Paginas/Contacto';
import Productos from './components/Paginas/Productos';
import { CartProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
import './App.css';

function App() {
  return (
  <CartProvider>
    <BrowserRouter>
      <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
