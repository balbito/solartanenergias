
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Box, Center, Text} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import Loader from './Loader'

const ItemListContainer = () => {
    
    const { categoria } = useParams()

    const [productos, setProductos] = useState([])
    console.log(productos)
  
    useEffect(()=>{
       const db = getFirestore()
  
       const itemsCollection = collection(db, "productos")
       getDocs(itemsCollection).then((snapshot)=>{
          const docs = snapshot.docs.map((doc)=> {return {...doc.data(),id: doc.id}})
          setProductos(docs)
       })
    }, []) 

  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)

  return (
    <>
       <Box bg='#519C54' minHeight='100vh'>
        <Center><Text marginTop='50' fontSize='50px' color='white'>Bienvenidos a Solartan! Energias Renovables</Text></Center>
      { productos.length === 0 ? <Loader/> :
        categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
      }
       </Box>
    </>

  )
}

export default ItemListContainer
