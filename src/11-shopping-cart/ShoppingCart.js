import { useEffect, useState } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {
  //const cart = [{ name: 'apple', quantity: 1, price: 0.39 }]
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
const addToCart = (item) => {
  const tempCart = [...cart];
  const itemFound = tempCart.find((itemInCart) => {
return itemInCart.name === item.name;
  })
  if(itemFound){
    itemFound.quantity++;
    setCart(tempCart);
  } else{
    setCart([...tempCart,{...item, quantity:1}]);
  }
}
const removeFromCart = (item) => {
  const tempCart = [...cart];
  const itemFound = tempCart.find((itemInCart) => {
return itemInCart.name === item.name;
  })
  if(itemFound.quantity>1){
    itemFound.quantity--;
    setCart(tempCart);
  }else{
    const filtered = tempCart.filter((cartItem)=> {
      return cartItem.name !== item.name;
    });
    setCart(filtered);
  }
}
useEffect(() => {
const newTotal = cart.reduce((acc, current) => {
  return acc + (current.quantity*current.price);
}, 0);
setTotal(newTotal);
},[cart])
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => removeFromCart(item)}>-</button>
                {item.quantity}
                <button onClick={() => addToCart(item)}>+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart
