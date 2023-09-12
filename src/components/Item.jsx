import React from 'react';
import { Box, Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

  console.log(producto);

  return (
    <div>
      <Box  display="flex" alignItems="center" justifyContent="space-between"  >
        <Card  w='250px' h='200px' maxW='sm'   >
          <CardBody>
            <Image src={producto.image}  borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md' color='#5f9e68'>{producto.nombre}</Heading>
            </Stack>
          </CardBody>
          <Divider color='#5f9e68' />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' style={{ backgroundColor: '#507255', color: 'white'}}>
                <Link to={`/item/${producto.id}`}>Detalle</Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </div>
  )
}

export default Item
