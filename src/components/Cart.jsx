import React, { useContext } from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react'



const Cart = () => {
  const { cart, removeItem, clearCart, total } = useContext(CartContext)
  console.log(cart)
  return (
    <>


      {cart.length > 0 ?
        <>
          <TableContainer padding={10}>
            <Table size="sm" color="green">
              <Thead>
                <Tr>
                  <Th>Product ID</Th>
                  <Th>DESCRIPTION</Th>
                  <Th isNumeric>QTY</Th>
                  <Th isNumeric>Unit Price</Th>
                  <Th isNumeric>TOTAL</Th>
                  <Th>DELETE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart.map(item => {
                  return (
                    <Tr key={item.id}>
                      <Td>#{item.id}</Td>
                      <Td>{item.nombre}</Td>
                      <Td isNumeric>{item.cantidad}</Td>
                      <Td isNumeric>${item.precio}</Td>
                      <Td isNumeric>${item.cantidad * item.precio}</Td>
                      <Td><Button onClick={() => removeItem(item.id)} colorScheme='green'>X</Button></Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent="center" gap={10} flexDirection="column" alignItems="center" >
          <Button onClick={() => clearCart()} variant='solid' style={{ backgroundColor: '#507255', color: 'white' }}>Vaciar carrito</Button>
          </Flex>
          <Form />
        </> :
        <Flex justifyContent="center" gap={10} flexDirection="column" alignItems="center" height="70vh">
          <Text>El carrito esta vacio</Text><Link to={'/'}><Button variant='solid' style={{ backgroundColor: '#507255', color: 'white' }} >Regresa a la pantalla principal</Button></Link></Flex>}
      {cart.length > 0 ? <Text textAlign="center" fontSize="4xl" margin={10}>TOTAL: $ {total}</Text> : ""}

    </>
  )
}

export default Cart
