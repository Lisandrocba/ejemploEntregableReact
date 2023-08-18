import React, { useEffect, useState } from 'react'
import { getDataProducts } from '../data'
import { Link } from 'react-router-dom'

const ItemList = ({initial, stock}) => {
    let [products, setProducts] = useState([])

   useEffect(()=>{
    const cargaData=async()=>{
        setProducts(await getDataProducts())
    }
    cargaData()
   },[])
   
  
  return (
    <div>
        <div className='contenedorCart'>
            {products.map(product=>{

            return(
                <div className='cart '>
                    
                    <Link className='item' to={`/items/${product.id}`}>
                        <p>{product.nombre}</p>
                        <p>{product.descripcion}</p>
                    </Link>      
                </div>
            )
            })}
        </div>
    </div>
  )
}

export default ItemList;
