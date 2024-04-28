//Criando um Estoque de sneakers


let estoque = [];

let proximoId = 1;

// C --> Criando

function adicionarProduto(marca, modelo, quantidade, preco){
    let produto = {
        id: proximoId++,
        marca: marca,
        modelo: modelo,
        quantidade: quantidade,
        preco: preco,
    }

    estoque.push(produto)
}


let novoProduto1 = adicionarProduto("Nike", "Air Force", "15", "450");
let novoProduto2 = adicionarProduto("Adidas", "ADI2000", "10", "800");
let novoProduto3 = adicionarProduto("Vans", "Old-Skol", "8", "650");


//R --> Lendo

function listarProduto(){
    for(let i = 0; i < estoque.length; i++){
        let produto = estoque[i];
        console.log("Em estoque", produto)
    }
}

listarProduto()


// U --> Atualizando

function atualizarProduto (id, informacaoAtualizada) {
	for (let i = 0; i < estoque.length ; i++) {
		if (estoque[i].id === id) {
        	estoque[i] = Object.assign(estoque[i], informacaoAtualizada)
          break;
        }
    }
}

// D => Deletando
function removerProduto(id){
    for(let i = 0; i < estoque.length; i++){
        if(estoque[i].id === id){
            let removerProduto = estoque.splice(i, 1)
            console.log("removeu: ", removerProduto)
            return;
        }
    }
}


removerProduto(1);

listarProduto();

let novoProduto4 = adicionarProduto("Puma", "Suede", "4", "550");


listarProduto();

