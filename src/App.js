
import './App.css';

import { Footer, Navbar } from './components/layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ProductList from './pages/admin/products/productList';
import CreateProduct from './pages/admin/products/CreateProduct';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/admin/products" element={<ProductList />}/>
      <Route path="/admin/products/create" element={<CreateProduct />}/>

      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer />
     
    </BrowserRouter>
  );
}

export default App;
