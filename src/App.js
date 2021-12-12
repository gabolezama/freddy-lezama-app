import './AppStyles/App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { useState } from 'react';

function App() {

  const [ qty, setQty ] = useState(0)

  const onAdd = (data) =>{
    setQty(qty+1)
  }

  return (
    <div >
        <NavBar itemsQty={qty}/>
        <ItemListContainer onAdd={ (data) => onAdd(data) }/>
    </div>
  );
}

export default App;
