import { Box, Spacer, Flex } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
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
          <p className='number-cart'>1</p>
        </Box>
      </Flex>
    </div>
  )
}

export default CartWidget
