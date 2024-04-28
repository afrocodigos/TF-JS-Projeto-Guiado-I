//Lista vazia onde serão cadastrados os produtos
let estoque = []

function addProdutos(nome, quantidade, preco, descricao){
    let produto = {
        id: estoque.length + 1, 
        nome, 
        quantidade, 
        preco, 
        descricao
    }
     
    estoque.push(produto)
    return produto

}

// console.log("Esses são os produtos disponíveis no estoque no momento:", estoque)

function listarTodosProdutos () {
    return estoque
}

// console.log("Lista de produtos no estoque" , listarTodosProdutos())

function listarProdutoPorId(id) {
    for (let i = 0; i < estoque.length ; i++) {
        if (estoque[i].id === id) {
            return estoque[i]
        }

    }
    return null 
}

// console.log(`Buscando pelo id solicitado, encontramos o produto abaixo:` , listarProdutoPorId())


function atualizarProdutoPorId(id, produtoAtualizado) {
    for (let i = 0; i < estoque.length ; i++) {
        if (estoque[i].id === id) {
            estoque[i] = {...estoque[i], ...produtoAtualizado}
            return estoque[i]
        }
    }
return null
}

function deletarProduto(id){
    for (let i = 0; i < estoque.length; i++) {
       if (estoque[i].id === id) {
            estoque.splice(i, 1)
            return true
        }
    }
    return false
}

// Testando as funções criadas: 

// addProdutos("Biscoito", 100, 30.00, "Gostoso")
// addProdutos("Bolacha", 200, 50.00, "Bem Gostoso")
// addProdutos("Bolachinha", 400, 100.00, "Bem Gostosinho")

// console.log(listarTodosProdutos())

// console.log(deletarProduto(3))

// console.log(listarTodosProdutos())

// console.log(atualizarProdutoPorId(2 , {quantidade: 300}))

// console.log(listarTodosProdutos())


