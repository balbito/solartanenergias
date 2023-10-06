import React, { useContext } from 'react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { Flex, Box, FormLabel, Input, Text, Heading, Button, AccordionButton, AccordionIcon, AccordionItem, Accordion, AccordionPanel, } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

  const pagoexitoso = () => {
    if (nombre !== '' && email !== '') {
      toast.success('Gracias por su compra, fue exitosa!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }


  const { cart } = useContext(CartContext)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderId] = useState(null)
  

  const db = getFirestore()


  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombre === "" || email === "") {
      alert ("Complete sus datos porfavor")
    } else {
    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id)
      });
    }
  }

  const order = {
    buyer: {
      nombre, email
    },

    items: cart.map(({ id, nombre, precio, cantidad }) => ({
      id, nombre, precio, cantidad

    }))


  }

  const ordersCollection = collection(db, "orden")
  return (
  
      <Flex justifyContent="center" flexDirection="column" gap={10} alignItems="center" width="50%" margin="100px auto">
        <Heading>
          COMPRA
        </Heading>
        <Text textAlign="center">
          Completar informacion personal para su compra
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="column" gap={10} alignItems="center">
            <Box>
              <FormLabel>NOMBRE Y APELLIDO </FormLabel>
              <Input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
            </Box>
            <Box>
              <FormLabel>EMAIL</FormLabel>
              <Input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </Box>
            <Box>
              <Button colorScheme='green' type="submit" onClick={pagoexitoso}>Pagar</Button>
            </Box>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Id de tu compra:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {orderId}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </form>
        <ToastContainer />
      </Flex>
   
    
    )
}

export default Form