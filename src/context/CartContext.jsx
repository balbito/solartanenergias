import React from 'react'
import {useState, createContext} from 'react'


export const CartContext = createContext(
 { 
  cart: [],
  total:0,
}  
)

const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const addItem = (item, cantidad, id) => {
    const index = cart.findIndex(prod => prod.id === id)
    console.log(id)
    if (index !== -1) {
      const cartUpdated = [...cart]
      cartUpdated[index].cantidad += cantidad
      setCart(cartUpdated)
    } else {
      setCart(prev => [...prev, {...
   item, cantidad, id}])
    }
    setTotal(total + item.precio * cantidad)
  }
  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
    const itemToRemove = cart.find(prod => prod.id === itemId)
    if (itemToRemove) {
      setCart(cartUpdated)
      setTotal(total - itemToRemove.precio * itemToRemove.cantidad)
    }
  };
  const clearCart = () => {
    setCart([])
    setTotal(0)
  }
  
  return (
    <CartContext.Provider value={{clearCart, removeItem, addItem, cart, total}}>
    
        { children }

    </CartContext.Provider>
  )
}

export default ShoppingCartProvider