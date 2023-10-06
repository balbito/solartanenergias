import React from 'react'
import ItemDetail from './ItemDetail'
import {
  Grid, Center
} from "@chakra-ui/react";
import {useEffect, useState} from 'react'
import {doc, getDoc} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import Loader from './Loader';


const ItemDetailContainer = () => {

    
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    console.log(product)
    
    useEffect(() => {
      const db = getFirestore()
  
      const oneItem = doc(db, "productos", `${id}`)
      getDoc(oneItem).then((snapshot) => {
          if(snapshot.exists()){
              const docs = snapshot.data()
              setProduct(docs)
          }
      })
    }, [id])

  return (
    <>
      <div>
        <Center bg='#519C54'  >
          <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3, 1fr)']} gap={14} mt='20'>
            <ItemDetail
              producto = { product } id = { id }/>
          </Grid>
        </Center>
      </div>
    </>
  )
}

export default ItemDetailContainer
