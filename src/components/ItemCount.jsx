import { useState } from 'react';
import { Button, Stack, Box } from '@chakra-ui/react';

const ItemCount = () => {

  const [contador, setContador] = useState(0)

  return (
    <>
      
        <Stack direction={['column', 'row']} spacing='30px' >
          <Box w='40px' h='40px'>
            <Button size='xs' color='#5f9e68' border='solid' bg='white' onClick={() => setContador(contador > 0 ? contador - 1 : 0)}>
              -
            </Button>
          </Box>
          <Box w='40' h='30px' color='#5f9e68' border='solid' bg='white' borderRadius='4px'>
            <p className='contador'>{contador}</p>
          </Box>
          <Box w='40px' h='40px'>
            <Button size='xs' color='#5f9e68' border='solid' bg='white' onClick={() => setContador(contador + 1)}>
              +
            </Button>
          </Box>
        </Stack>
      
    </>

  )
}

export default ItemCount
