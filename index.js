/**
 * Función que retorna un Array con las ordenes que solo contienen 'lechuga y palta'.
 * @function lechugaYPalta
 * @returns {Array} 
 */

const lechugaYPalta = () => {
    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ingredients.includes('lechuga') && 
        sandwichOrder.ingredients.includes('palta')
    )
    return resultado
}

/**
 * Función que retorna un String con la información sobre la fecha, la proteína y
 * el tipo de pan que eligió ese pedido buscado por número de 'id'.
 * @function encontrarOrdenPorId
 * @param {Number} idOrden 
 * @returns {String} 
 */

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

/**
 * Función que retorna un True o un False si el número de orden('id) contiene pepinillos.
 * @function ordenConPepinillos
 * @param {Number} idOrden
 * @returns {Boolean}
 */

const ordenConPepinillos = idOrden => {
    const filtrodeOrdenes = sandwichOrders.find(sandwichOrder => sandwichOrder.id === idOrden)
    if(filtrodeOrdenes){
        return filtrodeOrdenes.ingredients.some(ingredient => ingredient === 'pepinillos')

        // Solución alternativa
        // const filtro = filtrodeOrdenes.ingredients.includes('pepinillos')
        // return filtro
    }
}

/**
 * Función que retorna un String con un mensaje informando cuántas órdenes se encontraron para
 * la fecha entregada como párametro, ejemplo: '20-10-2020'.
 * @function ordenPorDia
 * @param {String} fecha
 * @returns {String}
 */

const ordenPorDia = fecha => {
    const filtrodeOrdenes = sandwichOrders.filter(sandwichOrder => sandwichOrder.ordered === fecha)
    return `Se encontraron ${filtrodeOrdenes.length} para la fecha ${fecha}`
}

/**
 * Función que retorna un array con todas las fechas de las órdenes que cumplan con tener 'not burger' 
 * y 'cebolla caramelizada'.
 * @function ordenesConProteina
 * @returns {Array}
 */

const ordenesConProteina = () =>{
    const filtroProteinasYcebollas = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.protein.includes('not burger') &&
        sandwichOrder.ingredients.includes('cebolla caramelizada'))

    return filtroProteinasYcebollas.map(filtroProteinaYcebolla => filtroProteinaYcebolla.ordered)
}

/**
 * Función que retorna un objeto con la cantidad total de ordenes que corresponden a cada tipo
 * de pan. 
 * @function ordenesConReduce
 * @returns {Object}
 */
const ordenesConReduce = () => {
    const contadorPanes = {
        hallulla: 0,
        marraqueta: 0,
        bagette: 0,
        brioche: 0,
        pita: 0
    }

    const tipoDePanes = sandwichOrders.reduce((totalPan, sandwichOrder) => {
        totalPan[sandwichOrder.bread] = totalPan[sandwichOrder.bread] + 1
        return totalPan
    },contadorPanes)

    return tipoDePanes
}


/**
 * Ejercicios para entender mejor el uso del método Reduce()
 */

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

const ejercicios = [1,2,2,1,4,5,7,10,10]
const reduce = ejercicios.reduce((posanterior, posactual) => {
    if(posanterior.includes(posactual)){
        return posanterior.push(posiactual)
    }
    return posanterior

},[])