// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de 
// receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.

// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

// Fulano possui saldo POSITIVO de 43.3
// Sicrano possui saldo NEGATIVO de -90.3

const usuarios = [
  {
    nome: 'Savio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  },
  {
    nome: 'Marlon',
    receitas: [20.8, 112, 45.87, 0.28],
    despesas: [12, 45.9, 85.7, 90.25]
  }
];


function calculaSaldo(receitas, despesas){
  const somaReceitas = somaNumeros(receitas);
  const somaDespesas = somaNumeros(despesas);
  
  return somaReceitas - somaDespesas;
}

function somaNumeros(numeros){
  let soma = 0;
  for(let i=0; i<numeros.length; i++){
    soma += numeros[i];
  }
  return soma;
}

for(usuario of usuarios){
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas);

  if(saldo>0){
    console.log(`O ${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`);
  } else{
    console.log(`O ${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`);
  }
}
