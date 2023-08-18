/* Arreglo con la lista de productos */

const products = [
    {
        id: 1,
        nombre: "celular",
        precio: "200000",
        descripcion: "soy un celular",
        stock: 20
    },
    {
        id: 2,
        nombre: "compu",
        precio: "180000",
        descripcion: "soy alta compu",
        stock: 5
    },
    {
        id: 3,
        nombre: "tablet",
        precio: "85000",
        descripcion: "soy una tablet pequeña",
        stock: 8
    },
    {
        id: 4,
        nombre: "teclado",
        precio: "20000",
        descripcion: "soy un teclado",
        stock: 30
    },
]

/* Funcion get que devuelve la lista de productos completa */

export const getDataProducts = async()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products)
        },1000)
    })
}

/* funcion get que devuelve un producto por su id */

export const getDataProductId = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            const res = products.find(item =>  item.id === parseInt(id))
            resolve(res
                
                )
        },1000)
    })
    
}
