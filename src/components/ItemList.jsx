import React from 'react'
import Item from './Item'
import {
  Grid, Center
} from "@chakra-ui/react";


const ItemList = ({ productos }) => {

  return (

    <div>
      <Center>
        <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3, 1fr)']} gap={14} mt='20'>
        
          {productos.map((p) => {
            return (
              <>
                <Item producto={p} key={p.id} />
              </>
            )
          })
          }
        </Grid>
      </Center>
    </div>

  )
}

export default React.memo(ItemList)
