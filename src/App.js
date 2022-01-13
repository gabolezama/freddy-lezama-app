import './AppStyles/App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Infusiones from './Components/Infusiones/Infusiones';
import Pasteleria from './Components/Pasteleria/Pasteleria';
import Cart from './Components/Cart/Cart';
import { ContextProvider } from './Components/CartContext/CartContext';
import Loader from './Components/Loader/Loader';
import FloatingButton from './Components/FloatingButton/FloatingButton';

function App() {

  const Home = () =>{

    return(
      <div>
        <ItemListContainer/>
      </div>
    )
  }

  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Loader/>
        <FloatingButton/>
          <Routes>
            <Route exact path='/' element={ <Home/>}/>
            <Route exact path='/Café' element={ <Home/>}/>
            <Route exact path='/Infusiones' element={ <Infusiones/>}/>
            <Route exact path='/Pasteleria' element={ <Pasteleria/>}/>
            <Route exact path={`/ItemDetail/:country/:id/:rating/:price`} element={ <ItemDetailContainer/>}/>
            <Route exact path={`/cart`} element={ <Cart/>}/>
          </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
