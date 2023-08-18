import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataProductId } from '../data';

export default function ItemDetalle() {
  /* usamos el parametro que enviamos desde la lista de produtos con react router dom */
    const {id} = useParams();
    const [product , setProduct] = useState(null)
/*   buscamos el producto al cargar la pagina y cada vez que se modifica el parametro  */
    useEffect(()=>{
         getDataProductId(id).then(res=> setProduct(res))
     },[id])
  return (
    <div className='contenedorCart'>
{/*       render condicional para la espera de datos, si el producto no llego se renderiza un mensaje */}
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
