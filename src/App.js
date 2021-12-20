import './AppStyles/App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Infusiones from './Components/Infusiones/Infusiones';
import Pasteleria from './Components/Pasteleria/Pasteleria';

function App() {
  const [qty, setQty] = useState(0);
  const [seeIdItem, setSeeIdItem ] = useState(0)

  const onAdd = (data) => {
    setQty(qty + 1);
  };

  const Home = () =>{

    return(
      <div>
        <ItemListContainer  onAdd={(data) => onAdd(data)} />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <NavBar itemsQty={qty} />
      <Routes>
        <Route exact path='/home' element={ <Home/>}/>
        <Route exact path='/Café' element={ <Home/>}/>
        <Route exact path='/Infusiones' element={ <Infusiones onAdd={data => onAdd(data)}/>}/>
        <Route exact path='/Pasteleria' element={ <Pasteleria/>}/>
        <Route exact path={`/ItemDetail/:country/:rating`} element={ <ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
