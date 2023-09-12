import React from 'react'
import ItemDetail from './ItemDetail'
import {
  Grid, Center
} from "@chakra-ui/react";


const ItemDetailContainer = () => {

  const productos = [
    { id: 1, nombre: "Manta Solar A", descripcion: "descripcion de manta solar A", precio: 1000, stock: 5, categoria: "Mantas Solares" },
    { id: 2, nombre: "Manta Solar B", descripcion: "descripcion de manta solar B", precio: 1500, stock: 10, categoria: "Mantas Solares" },
    { id: 3, nombre: "Panel Solar C", descripcion: "descripcion de Panel Solar C", precio: 2000, stock: 15, categoria: "Paneles Solares" },
    { id: 4, nombre: "Panel Solar D", descripcion: "descripcion de Panel Solar D", precio: 2500, stock: 20, categoria: "Paneles Solares" },
    { id: 5, nombre: "Termotanque Solar E", descripcion: "descripcion de Termotanque Solar E", precio: 3000, stock: 25, categoria: "Termotanques Solares" },
    { id: 6, nombre: "Termotanque Solar F", descripcion: "descripcion de Termotanque Solar F", precio: 3500, stock: 30, categoria: "Termotanques Solares" }
  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("no hay productos para mostrar"))
    }
  })

  getProductos
    .then((resultado) => {
    })
    .catch((error) => {
      console.log(error)
    })




  return (
    <>
      <div>
        <Center bg='#519C54'  >
          <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3, 1fr)']} gap={14} mt='20'>
            <ItemDetail
              productos={productos} />
          </Grid>
        </Center>
      </div>
    </>
  )
}

export default ItemDetailContainer
