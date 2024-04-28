//primeiro vou criar uma lista vazia
const prompt = require("prompt-sync")();
let estoque = [];
let proximoid = 1;
//CRIAR
//depois criar uma função que vai adicionar os produtos
 function adicionarNovoProduto(nome, quantidade,preco,descricao){
 //depois vou fazer o objeto nesse caso e uma lista de produtos
     //o = esta ali para atribuir os parametros ao objeto de nome produto
     let produto = {
         //primeiro a gente escreve o que quer que aparece e depois escreve a fonte de dados
         //exemplo nome: nome
         id: proximoid++,//o id não precisa de parametro pois não e um dado que e necessario que o usuario coloque 
         nome: nome,
         quantidade: quantidade,
         preco: preco,
         descricao: descricao
     }
     //agora adicionar os valores do produto na lista estoque
     estoque.push(produto);
 }
 
//console.log(estoque);

//LER
function listaProduto(){
    for(let i = 0 ; i<estoque.length; i++){
        let produto = estoque[i];
        console.log("listando produtos ",produto);
    }
}

//listaProduto();
//ATUALIZAR
function atualizarProduto(id, InformacaoAtualizada){
    for(let i = 0 ; i<estoque.length; i++){
        if(estoque[i].id === id){//ele vai verificar se tem esse id na lista estoque tendo o id ele entra no if
            estoque[i] = Object.assign(estoque[i], InformacaoAtualizada);//ele vai ir no indice do estoque selecionado
            //depois vai utilizar o assign que ele vai verificar os parametros do objeto e se ouver alguma mudança ele vai atualizar
            //e vai manter os parametros que não foram alterados
            break;
        }
    }

}


//DELETAR

function removerProduto(id){
    for(let i = 0; i< estoque.length; i++){
        if(estoque[i].id === id){
            let removerProduto = estoque.splice(i, 1)//o i indica a posição que será deletada vai ser o que vai deletar e o -1 e da onde ele vai começar a remover
            console.log(removerProduto);
            return;
        }
    }
}

let novoProduto1 = adicionarNovoProduto("Tênis1", "30", "12.00", "Tênis da marca Afrocódigos");
let novoProduto2 = adicionarNovoProduto("Tênis2", "30", "15.00", "Tênis da marca Afrocódigos");
let novoProduto3 = adicionarNovoProduto("Tênis3", "30", "18.00", "Tênis da marca Afrocódigos");
let novoProduto4 = adicionarNovoProduto("Tênis4", "30", "25.00", "Tênis da marca Afrocódigos");
let novoProduto5 = adicionarNovoProduto("Tênis5", "30", "30.00", "Tênis da marca Afrocódigos");

listaProduto();

const remover = parseInt(prompt("Escolha o indice que vc quer deletar!!"));
removerProduto(remover)

listaProduto()
//listaProduto();
function filtragem() 
{
const escolha = parseInt(prompt("Digite 1 para filtrar pelo nome \n Digite 2 para filtrar pela quantidade \n Digite 3 para filtrar pelo preço \n"));
    if (escolha === 1)
    {   
        const filtro_nome = (prompt("Filtrando por nome: "));
        let filtro_estoque = estoque.filter((esto_que) => esto_que.nome === filtro_nome);
        console.log(filtro_estoque);
    }
    else if (escolha === 2)
    {
        const filtro_quantidade = parseInt(prompt("Filtrando por quantidade: "));
        let filtro_estoque = estoque.filter((esto_que) => esto_que.quantidade > filtro_quantidade);
        console.log(filtro_estoque);
    }
    else if (escolha === 3)
    {
        const filtro_preco = parseInt(prompt("Filtrando por preço: "));
        let filtro_estoque = estoque.filter((esto_que) => esto_que.preco > filtro_preco);
        console.log(filtro_estoque);
    }
    else{
        console.log("Escolha invalida");
    }
}
filtragem();
