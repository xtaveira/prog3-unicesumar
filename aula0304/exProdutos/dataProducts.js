// array
const products = [
  {
    nome: "Lápis",
    preco: 1,
    quantidade: 100,
  },
  {
    nome: "Caneta",
    preco: 2,
    quantidade: 300,
  },
  {
    nome: "Borracha",
    preco: 0.5,
    quantidade: 50,
  },
  {
    nome: "Caderno",
    preco: 10,
    quantidade: 1000,
  },
  {
    nome: "Lapizeira",
    preco: 4,
    quantidade: 55,
  },
  {
    nome: "Estojo",
    preco: 7,
    quantidade: 400,
  },
  {
    nome: "Tênis",
    preco: 111,
    quantidade: 40,
  },
  {
    nome: "Lagosta",
    preco: 200000,
    quantidade: 1,
  },
  {
    nome: "Moto",
    preco: 2000,
    quantidade: 5,
  },
  {
    nome: "Professor",
    preco: 10,
    quantidade: 5,
  },
];

// let threeProducts = (products) => {
//   let chosenProducts = [];

//   do {
//     let randNumber = Math.floor(Math.random() * products.length);
//     if (!chosenProducts.includes(products[randNumber]))
//       chosenProducts.push(products[randNumber]);
//   } while (chosenProducts.length < 3);

//   return chosenProducts;
// };

export default products
