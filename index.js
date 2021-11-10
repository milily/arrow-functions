const lechugaYPalta = () => {
    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ingredients.includes('lechuga') && 
        sandwichOrder.ingredients.includes('palta')
    )
    return resultado
}

const encontrarOrdenPorId = idOrden => {

    const filtrodeOrdenes = sandwichOrders.find(sandwichOrder => sandwichOrder.id === idOrden)
    if(filtrodeOrdenes){
        const{
            ordered,
            protein,
            bread
        } = filtrodeOrdenes
    
        const respuesta1 = `la orden fue realizada el ${ordered}, la orden llevó ${protein} y ${bread}`
        return respuesta1
        
    }
    
    const respuesta2 = `No se encontró la orden con id ${idOrden}`
    return respuesta2  
}

const ordenConPepinillos = idOrden => {

    const filtrodeOrdenes = sandwichOrders.find(sandwichOrder => sandwichOrder.id === idOrden)

    if(filtrodeOrdenes){
        // const filtro = filtrodeOrdenes.ingredients.includes('pepinillos')
        // return filtro
        return filtrodeOrdenes.ingredients.some(ingredient => ingredient === 'pepinillos')
    }
}


const ordenPorDia = fecha => {

    const filtrodeOrdenes = sandwichOrders.filter(sandwichOrder => sandwichOrder.ordered === fecha)
    return `Se encontraron ${filtrodeOrdenes.length} para la fecha ${fecha}`
}

