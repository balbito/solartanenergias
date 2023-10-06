import { useState } from 'react';
import { Button, Stack, Box, Flex } from '@chakra-ui/react';

const ItemCount = ({onAdd}) => {

  const [contador, setContador] = useState(0)

  return (
    <>
      
        <Stack direction={['column', 'row']} spacing='20px' >
          <Box w='40px' h='40px'>
            <Button size='sm' color='white' border='solid' bg='#5f9e68' onClick={() => setContador(contador > 0 ? contador - 1 : 0)}>
              -
            </Button>
          </Box>
          <Box w='20' h='35px' color='white' border='solid' bg='#5f9e68' borderRadius='4px'>
            <p className='contador'>{contador}</p>
          </Box>
          <Box w='40px' h='40px'>
            <Button size='sm' color='white' border='solid' bg='#5f9e68' onClick={() => setContador(contador < 10 ? contador + 1 : 10)}>
              +
            </Button>
          </Box>
          <Button size='sm' color='white' border='solid' bg='#5f9e68' onClick={() => onAdd(contador)}>Agregar al carrito</Button>
        </Stack>
      

    </>

  )
}

export default ItemCount
