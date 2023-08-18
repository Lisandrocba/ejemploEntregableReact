import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataProductId } from '../data';

export default function ItemDetalle() {
    const {id} = useParams();
    const [product , setProduct] = useState(null)

    useEffect(()=>{
         getDataProductId(id).then(res=> setProduct(res))
     },[id])
  return (
    <div className='contenedorCart'>
      {product ? 
    <div className='cart item'>
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <p>$ {product.precio}</p>
        <p>Stock: {product.stock}</p> 
    </div>
    :
    <p>esperando datos</p>
    }

    </div>
  )
}
