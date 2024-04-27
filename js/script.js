let nextId = 1
let productsStockList = []

const getInputs = () => {
    const inputs = {
        name: document.querySelector('#nome'),
        quantity: document.querySelector('#quantidade'),
        price: document.querySelector('#preco'),
        description: document.querySelector('#descricao')
    }

    const inputsValues = {
        name: inputs.name.value,
        quantity: inputs.quantity.value,
        price: inputs.price.value,
        description: inputs.description.value === '' ? 'N/A' : inputs.description.value
    }

    if(!inputsValues.name || !inputsValues.quantity || !inputsValues.price ) return alert('Preencha os campos, por favor')

    return {inputs, inputsValues}
}


// CRIAR
const addNewProduct = () => {
    let { inputs, inputsValues } = getInputs()
    const newProduct = { id: nextId++, name: inputsValues.name, quantity: inputsValues.quantity, price: inputsValues.price, description: inputsValues.description }
    productsStockList.push(newProduct)
    cleanInputs(inputs)
    showListProducts()
}


const cleanInputs = (inputs) =>{
    inputs.name.value = ''
    inputs.quantity.value = ''
    inputs.price.value = ''
    inputs.description.value = ''
}


const showListProducts = () => {
    const productListContainer = document.querySelector('#lista-produtos')
    productListContainer.innerHTML = ''

    for(let i = 0; i < productsStockList.length; i++){
        let product = productsStockList[i]
        const productElement = `
            <li>
                <span>
                    <strong>Qt:</strong> ${product.quantity} - <strong>Produto:</strong> ${product.name} - R$ ${product.price},00 - <strong>Descrição:</strong> ${product.description}
                </span>
                <button onclick={removeProduct(${product.id})}>X</button>
            </li>
        `

        productListContainer.innerHTML += productElement
    }
}

// Falta implementar o update com html
const updateProduct = (id, propToUpdate) => {
    for(let i = 0; i < productsStockList.length; i++){
        let product = productsStockList[i]

        if(id === product.id){
            let keyObj = Object.keys(propToUpdate)
            product[keyObj] = propToUpdate[keyObj]
            return
        }
    }
}


const removeProduct = (id) => {
    const newList = productsStockList.filter(product => {if(id !== product.id) return product})
    productsStockList = newList
    showListProducts()
}
