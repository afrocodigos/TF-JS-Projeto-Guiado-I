//lógica aqui

let estoque = [];
let proximoId = 1;
function adicionarProduto(nome,quantidade, preco, descricao) {
    let produto ={
        id: proximoId++,
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        descricao: descricao
    }
    estoque.push(produto);
};

let novoProduto = adicionarProduto('Tênis', "30", "12", "Tênis lindo");
let novoProduto2 = adicionarProduto('Tênis', "30", "12", "Tênis lindo");

console.log(estoque)

function listarProduto(){
    for (let i = 0; i < estoque.length; i++) {
        let produto = estoque[i];
        console.log("listando produto:", produto)
    }
}
listarProduto()

function atualizarProduto(id, informacaoAtualizada) {
    for (let i = 0; i < estoque.length; i++) {
        if(estoque[i].id === id){
            estoque[i] = Object.assign(estoque[i], informacaoAtualizada)
            break ;
        }
    }
}
atualizarProduto(1, {nome: "Tênis Atrocódigo"});

function removerProduto(id) {
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].id === id) {
            let removerProduto = estoque.splice (i, 1)
            console.log("removendo produto",removerProduto)
            return
        }        
    }
}
removerProduto(1)
listarProduto()

