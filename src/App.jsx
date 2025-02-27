import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Shopping from './components/Shopping';
import Cart from './components/Cart';
import './styles/Shopping.css';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
  // const handleClick = (item) => {
  //   console.log(item);
  //   const isPresent = cart.some(product => product.id === item.id);
  
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
      setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id ===  item.id)
				ind = index;
		});
    const tempArr = cart;
		tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
  }
  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      
      {
        show ? <Shopping handleClick={handleClick} /> :  <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {
        warning && <div className='warning'>This book is already added</div>
      }
    </>
  );
}

export default App;
