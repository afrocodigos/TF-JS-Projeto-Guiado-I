//lógica aqui

//inicia uma lista vazia
let estoque = [];

let proximoId = 1;
// //C => CRIAR
const adicionarProdutoArrow = (nome, quantidade, preco, descricao) => {
  let produto = {
    id: proximoId++,
    nome: nome,
    quantidade: quantidade,
    preco: preco,
    descricao: descricao,
  };
  estoque.push(produto);
  console.log(estoque);
};

const listarProdutoArrow = () => {
  let produto = 0;
  estoque.forEach((elemento) => (produto = elemento));
  console.log("continuando", produto);
};

const atualizarProdutoArrow = (id, informacaoAtualizada) => {
  const estoqueAtualizado = estoque.map((estoque) => {
    if (estoque.id === id) {
      return {
        estoque: estoque,
        informacaoAtualizada,
        id: estoque.id,
      };
    }
    return estoque, informacaoAtualizada, estoque.id;
  });
  console.log("Atulizada", estoqueAtualizado);
};

const removerProdutoArrow = (id) => {
  if (id === estoque.id) estoque.forEach((remove) => remove.slice((remove, 1)));
  console.log("Foi removido", estoque);
};

adicionarProdutoArrow("Short", 1, 2000, "Shot Masculino");
adicionarProdutoArrow("Calça", 4, 4000, "Calça jeans MAculino");
adicionarProdutoArrow("Guarda-chuva", 10, 400, "Objeto");
atualizarProdutoArrow(1, "Vestido");
listarProdutoArrow();
removerProdutoArrow(2);
listarProdutoArrow();

// //
// function adicionarProduto(nome, quantidade, preco, descricao) {
//   let produto = {
//     id: proximoId++,
//     nome: nome,
//     quantidade: quantidade,
//     preco: preco,
//     descricao: descricao,
//   };
//   estoque.push(produto);
// }

// // // R(READ) => LER
// function listarProduto() {
//   for (let i = 0; i < estoque.length; i++) {
//     let produto = estoque[i];
//     console.log("continuando", produto);
//   }
// }

// // // U => Atualizar
// function atualizarProduto(id, informacaoAtualizada) {
//   for (let i = 0; i < estoque.length; i++) {
//     if (estoque[i].id === id) {
//       estoque[i] = Object.assign(estoque[i], informacaoAtualizada);
//       break;
//     }
//   }
// }

// // // D => Deletar
// function removerProduto(id) {
//   for (let i = 0; i < estoque.length; i++) {
//     if (estoque[i].id === id) {
//       let removerProduto = estoque.splice(i, 1);
//       console.log("removeu: ", removerProduto);
//       return;
//     }
//   }
// }

// let novoProduto1 = adicionarProduto(
//   "Tênis",
//   "30",
//   "12.00",
//   "Tênis da marca Afrocódigos"
// );
// let novoProduto2 = adicionarProduto(
//   "Tênis",
//   "30",
//   "12.00",
//   "Tênis da marca Afrocódigos"
// );
// let novoProduto3 = adicionarProduto(
//   "Tênis",
//   "30",
//   "12.00",
//   "Tênis da marca Afrocódigos"
// );
// let novoProduto4 = adicionarProduto(
//   "Tênis",
//   "30",
//   "12.00",
//   "Tênis da marca Afrocódigos"
// );
// let novoProduto5 = adicionarProduto(
//   "Tênis",
//   "30",
//   "12.00",
//   "Tênis da marca Afrocódigos"
// );

// listarProduto();

// removerProduto(3);

// listarProduto();
