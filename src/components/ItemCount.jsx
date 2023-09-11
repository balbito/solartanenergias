import { useState } from 'react';
import { Button, Stack, Box } from '@chakra-ui/react';

const ItemCount = () => {

  const [contador, setContador] = useState(0)

  return (
    <>
      
        <Stack direction={['column', 'row']} spacing='30px' >
          <Box w='40px' h='40px'>
            <Button size='xs' onClick={() => setContador(contador > 0 ? contador - 1 : 0)}>
              -
            </Button>
          </Box>
          <Box w='40px' h='40px'>
            <p>{contador}</p>
          </Box>
          <Box w='40px' h='40px'>
            <Button size='xs' onClick={() => setContador(contador + 1)}>
              +
            </Button>
          </Box>
        </Stack>
      
    </>

  )
}

export default ItemCount
