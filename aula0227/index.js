// let (2015) não pode usar fora do escopo declarado
// var (1900) pode usar fora do escopo (é global)

function hello() {
  let nome = "Thiago";
  console.log(nome);
  return;
}

function repete(numero) {
  for (let i = 0; i <= numero; i++) console.log(i);
}

function repeteDeNovo(numero) {
  let i = 0;

  while (i < numero) {
    console.log("repetindo");
    i++;
  }
}

let listaDeAlunos = [
  {
    nome: "Lucas",
    idade: 23,
  },
  {
    nome: "Davi",
    idade: 12,
  },
  {
    nome: "Fernando",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 20,
  },
];

function printAlunos(listaDeAlunos) {
  const listaComRa = listaDeAlunos.map((aluno) => {
    console.log(aluno.nome);
  });
}

let produtos = [
  {
    nome: "Shape Maple Element",
    valor: 300,
    estoque: 15,
  },
  {
    nome: "Shape Marfin SK8FAMILY",
    valor: 100,
    estoque: 2,
  },
  {
    nome: "Shape Maple Flip",
    valor: 280,
    estoque: 0,
  },
  {
    nome: "Truck Independent",
    valor: 500,
    estoque: 15,
  },
  {
    nome: "Truck Crail",
    valor: 200,
    estoque: 0,
  },
  {
    nome: "Truck Thunder",
    valor: 350,
    estoque: 3,
  },
];

const valorTotalDeProdutosComMap = (produtos) => {
  let valorTotal = 0;
  produtos.map((produto) => (valorTotal += produto.valor * produto.estoque));
  return valorTotal;
};

const valorTotalDeProdutosComReduce = (produtos) => {
  let valorTotal = produtos.reduce(
    (sum, produto) => (sum += produto.valor * produto.estoque)
  );
  return valorTotal;
};

const temEstoque = (produtos) => {
  const produtosComEstoque = produtos.filter((produto) => produto.estoque > 0);
  return produtosComEstoque;
};

const semEstoque = () => {
  const produtosSemEstoque = produtos.filter((produto) => produto.estoque == 0);
  return produtosSemEstoque;
};

console.log(
  `valor total de produtos com map: ${valorTotalDeProdutosComMap(produtos)}`
);
console.log(
  `valor total de produtos com reduce: ${valorTotalDeProdutosComReduce(
    produtos
  )}`
);
console.log(`quantidade de produtos com estoque: ${temEstoque(produtos)}`);
console.log(`quantidade de produtos sem estoque: ${semEstoque(produtos)}`);
