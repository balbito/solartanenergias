import { Box, Spacer, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const { cart } = useContext(CartContext)
  const totalQuantity = cart.reduce((total, item) => total + item.cantidad, 0)

  return (
    <div>
      <Flex>
        <Box>
          <span className ="material-symbols-outlined">
            shopping_cart
          </span>
        </Box>
        <Spacer />
        <Box>
          <p className='number-cart'>{totalQuantity}</p>
        </Box>
      </Flex>
    </div>
  )
}

export default CartWidget
