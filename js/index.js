let estoque = []

let proximoId = 0;

function adicionarProduto(nome, quantidade, preco, descricao){
        let produto = {
            id: proximoId++,
            nome: nome,
            quantidade: quantidade, 
            preco: preco,
            descricao: descricao,
        }

        estoque.push(produto)
}


function listarProdutos(){
    for(let i=0; i < estoque.length; i++){
        let produto = estoque[i];
        console.log(produto)
    }
}

function atualizarProduto(id, informacaoAtualizada){
    for (let i = 0; i < estoque.length; i++) {
        if(estoque[i].id === id) {
            estoque[i] = Object.assign(estoque[i], informacaoAtualizada)
          break;  

        }
    }
}


function removerProduto(id){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id ===id){
            let removerProduto = estoque.splice(i, 1)
            console.log(removerProduto)
            return;
        }
    }
}

let novoProduto1 = adicionarProduto("sapatilha", "20", "12,00", "adidas");
let novoProduto2 = adicionarProduto("sapatilha", "20", "12,00", "adidas");
let novoProduto3 = adicionarProduto("sapatilha", "20", "12,00", "adidas");
let novoProduto4 = adicionarProduto("sapatilha", "20", "12,00", "adidas");
let novoProduto5 = adicionarProduto("sapatilha", "20", "12,00", "adidas");

adicionarProduto()

listarProdutos()

atualizarProduto()

removerProduto()

