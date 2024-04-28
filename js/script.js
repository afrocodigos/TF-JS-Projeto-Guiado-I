
//Variáveis Globais

let estoque = [];
let id = 1;

// CRUD

//Create
function adicionarNovoProduto(nome, quantidade, preco, descricao) {

    let produto = {
        id: id,
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        descricao: descricao        
    }
    
    estoque.push(produto);
    id += id++
    alert("Produto Adicionado")
}


//Read
function mostrarEstoque () {return estoque}


//Update

function atualizarProduto(id, informacaoAtualizada) {  
    let produtoEncontrado = false;

    for( let i = 0; i< estoque.length; i++) {
        
        
        if(estoque[i].id === id) {    
            estoque[i] = Object.assign(estoque[i], informacaoAtualizada)
            console.log("Produto atualizado")
            produtoEncontrado = true;

            break;
        }       
    }

    if(produtoEncontrado === false) {console.log("Produto não Encontrado")}
}


//Delete


function removerProduto(id) {    
    for(let i = 0; i < estoque.length; i++) {
        if(estoque[i].id === id) {
            estoque.splice(i,1)    
        }   
    }
}




//testes

// adicionarNovoProduto("Café", 5, 10, "melhor coisa do mundo");
// adicionarNovoProduto("batata Doce", 50, 20.5, "carb");


//removerProduto(1); 

//console.log(estoque)



// function conferirProduto(id) {

// let confere = estoque.filter(produto => produto.id === id)

// return confere

// }
