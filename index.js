/**
 * @function lechugaYPalta
 * @returns {Array} returns an array containing all the orders with 'lechuga y palta'
 */
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

const ordenesConProteina = () =>{

    const filtroProteinaYcebolla = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.protein.includes('not burger') &&
        sandwichOrder.ingredients.includes('cebolla caramelizada'))

    return filtroProteinaYcebolla
}

const ordenesConReduce = () => {

    const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]
    const contadorPanes = {
        hallulla: 0,
        marraqueta: 0,
        bagette: 0,
        brioche: 0,
        pita: 0
    }

    const tipoDePanes = sandwichOrders.reduce((totalPan, sandwichOrder) => {

        // totalPan = {
        //   hallulla: 0
        //   ...  
        // }
        console.log(sandwichOrder.bread)
        totalPan[sandwichOrder.bread] = totalPan[sandwichOrder.bread] + 1
        return totalPan
    },contadorPanes)

    return tipoDePanes
}

const ejercicio = [1,2,2,1,4,5,7,10,10]
const arraynuevo = ejercicio.reduce((posianterior, posiactual)=>{
    if(posianterior.includes(posiactual)){
        return posianterior
    }
    posianterior.push(posiactual)
    return posianterior
},[])



const numeros = [1,2,3,4,5]

const result = numeros.reduce((valorAnterior, valorActual) => {
    // Primera iteracion
    valorAnterior // 5
    valorActual // 1
    // return 5 + 1

    // Segunda iteracion
    valorAnterior // 6
    valorActual // 2
    // return 6 + 2

    // Tercera iteracion
    valorAnterior // 3
    valorActual // 3
    // return 3 + 3

    // Tercera iteracion
    valorAnterior // 6
    valorActual // 4
    // return 6 + 4

    
    const valorNuevo = valorAnterior + valorActual
    return valorNuevo;
}, 5)