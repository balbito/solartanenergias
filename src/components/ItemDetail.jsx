import React from 'react';
import {
  Box, Image, Card, CardBody, CardFooter, Button, ButtonGroup, Text, Stack, Heading, Divider, Center
} from "@chakra-ui/react";
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ productos }) => {
  const { id } = useParams()

  const filteredProducts = productos.filter((producto) => producto.id == id)

  return (
    <div>
      <Box borderRadius='lg' mb='100px'  >
        <Center >
          {filteredProducts.map((p) => {
            return (
              <div key={p.id}>
                <Box display="flex" alignItems="center" justifyContent="space-between">

                  <Card maxW='sm' style={{ backgroundColor: '#5f9e68' }}>
                    <CardBody>
                      <Stack mt='6' spacing='3'>
                        <Heading size='md' color='white'>{p.nombre}</Heading>
                        <Text color='white'>{p.descripcion}</Text>
                        <Text color='white' fontSize='2xl'>${p.precio}</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ItemCount />
                    </CardFooter>
                  </Card>
                </Box>

              </div>
            )
          })}
        </Center>
      </Box>
    </div>
  )
}

export default ItemDetail;

                     