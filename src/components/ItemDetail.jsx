import React, { useContext, useState, useEffect } from 'react';
import {
  Box, Image, Card, CardBody, CardFooter, Button, ButtonGroup, Text, Stack, Heading, Divider, Center
} from "@chakra-ui/react";
import ItemCount from './ItemCount';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Loader from './Loader';


const ItemDetail = ({ producto, id }) => {
  
  
  const [cantidadAgregada, setCantidadAgregada] = useState(0)
  const [loading, setLoading] = useState(true)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad)

    addItem(producto, cantidad, id)
  }

  useEffect(() => {
    setTimeout(()=> {
    setLoading(false)
    },1500)
    }, [])

  
    if(loading){
      return <Loader/>
    }
  return (
    <div>
      
      <Box borderRadius='lg' mb='100px' >
        <Center >


          <div key={producto.id}>
            <Box >
            
              <Card maxW='sm'>

                <CardBody>
                  <Image
                    src={producto.imagen}
                    borderRadius='lg'
                    height="250px"
                    width="250px"
                    margin="0 auto"
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md' color='#5f9e68'>{producto.nombre}</Heading>
                    <Text color='#5f9e68'>{producto.descripcion}</Text>
                    <Text color='#5f9e68' fontSize='2xl'>${producto.precio}</Text>
                  </Stack>
                </CardBody>
                <Divider color='#5f9e68' />
                <CardFooter>
                  <ButtonGroup>
                    {
                      cantidadAgregada > 0 ? (
                        <>
                        <Link to={"/cart"}><Button size='sm' color='white' border='solid' bg='#5f9e68'>Terminar Compra</Button></Link>
                        <Link to={"/"}><Button Button size='sm' color='white' border='solid' bg='#5f9e68'>Seguir comprando</Button></Link>
                        </>
                      ) : (
                        <ItemCount initial={1} onAdd={handleOnAdd} />
                      )
                    }

                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Box>

          </div>


        </Center>
      </Box>
    </div>
  )
}

export default ItemDetail;

