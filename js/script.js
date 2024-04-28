//lógica aqui
let estoque = [];
let proximoId = 1;

//CRUD
//CRIAR
function adicionarProduto(nome, quantidade, preco, descricao) {
    let produto = {
        id: proximoId++,
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        descricao: descricao
    }

    estoque.push(produto);

    console.log(estoque);
}

let novoProduto = adicionarProduto("Tênis", "30", "12.00", "Tênis marca Afocódigos")

adicionarProduto("Tênis", "30", "12.00", "Tênis marca Desconhecida")

//LER
function listarProduto(){
    for(let i = 0; i < estoque.length; i++){
        let produto = estoque[i];
        console.log("console do listar",produto)
    }
}

//ATUALIZAR
function atualizarProduto(id, informacaoAtualizada){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
            estoque[i] = Object.assign(estoque[i], informacaoAtualizada);
            break
        }
    }
}

//DELETAR
function removerProduto(id){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
            let removerProduto = estoque.splice(i, 1);
        }
    }
}

removerProduto(1)
listarProduto()