let productsStockList = []
let nextId = 1

// CRIAR
const addNewProduct = ( name, quantity, price, description ) => {
    const newProduct = { id: nextId++, name: name, quantity: quantity, price: price, description: description }
    productsStockList.push(newProduct)
}

const newProduct = addNewProduct('Colar', 10, 50, 'Colar ponto de luz')
const newProduct2 = addNewProduct('Anel', 15, 40, 'Anel torcido')

// LER
const showListProducts = () => {
    for(let i = 0; i < productsStockList.length; i++){
        console.log(productsStockList[i])
    }
}
console.log('--------------- LISTA DE PRODUTOS CADASTRADOS ---------------')
showListProducts()

// ATUALIZAR
const updateProduct = (id, propToUpdate) => {
    for(let i = 0; i < productsStockList.length; i++){
        let product = productsStockList[i]

        if(id === product.id){
            let keyObj = Object.keys(propToUpdate)
            product[keyObj] = propToUpdate[keyObj]

            //em aula : productsStockList[i] = Object.assign(productsStockList[i], propToUpdate)
            return
        }
    }
}

updateProduct(2, {price: 45})

// DELETAR
const removeProduct = (id) => {
    const newList = productsStockList.filter(product => {if(id !== product.id) return product})
    productsStockList = newList
    showListProducts()
}

console.log('--------------- PRODUTOS ATUALIZADOS ---------------')
removeProduct(1)
