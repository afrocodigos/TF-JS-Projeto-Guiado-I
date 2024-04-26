//lógica aqui

let estoque = [];

let proximoId = 1;

function adicionarProduto(nome, quantidade, preco, descricao) {
    let produto = {
        id: proximoId++,
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        descricao: descricao
    }
    estoque.push(produto);
}

let novoProduto = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");
let novoProduto2 = adicionarProduto("Tênis", "30", "12.00", "Tênis da marca Afrocódigos");

function listarProduto() {
    for (let i = 0; i < estoque.length; i++) {
        let produto = estoque[i];
        console.log(produto);
    }
}

// listarProduto();

function atualizarProduto(id, informacaoAtualizada) {
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].id === id) {
            // FORMA DE ATUALIZAR APENAS UMA PROPRIEDADE DO PRODUTO
            informacaoAtualizada.nome !== undefined ? estoque[i].nome = informacaoAtualizada.nome : estoque[i].nome = estoque[i].nome;
            informacaoAtualizada.quantidade !== undefined ? estoque[i].quantidade = informacaoAtualizada.quantidade : estoque[i].quantidade = estoque[i].quantidade;
            informacaoAtualizada.preco !== undefined ? estoque[i].preco = informacaoAtualizada.preco : estoque[i].preco = estoque[i].preco;
            informacaoAtualizada.descricao !== undefined ? estoque[i].descricao = informacaoAtualizada.descricao : estoque[i].descricao = estoque[i].descricao;


            /*
            OUTRA FORMA DE ATUALIZAR APENAS UMA PROPRIEDADE DO PRODUTO
            if(estoque[i].id === id){
                estoque[i] = Object.assign(estoque[i], informacaoAtualizada)
            }
            */
            return;
        }
    }
}

function removerProduto(id) {
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].id === id) {
            let removerProduto = estoque.splice(i, 1);
            return;
        }
    }
}

removerProduto(1);

listarProduto();
