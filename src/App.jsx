import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import Form from "./components/Form"
import CartContext from "./context/CartContext"
import { useState } from "react"
import Loading from "./components/Loader"
import ShoppingCartProvider from "./context/CartContext"



function App() {

  return (
    <>
   

      <BrowserRouter>
        <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

        </Routes>
        </ShoppingCartProvider>
      </BrowserRouter> 
    </>

  )
}

export default App
