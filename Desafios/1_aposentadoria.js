// CÁLCULO DA APOSENTADORIA
// Crie um programa para calcular a aposentadoria de uma pessoa.

// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

// Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

// const nome = "Silvana";
// const sexo = "F";
// const idade = 48;
// const contribuicao = 23;
// Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
// Com base nas regras acima imprima na tela as mensagens:

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;


const nome = 'Paulo';
const sexo = 'M';
const idade = 63;
const contribuicao = 35;

const tempo = idade + contribuicao;

if (sexo==='M' && tempo>=95){
  console.log(`${nome}, você pode se aposentar!`)
} else if (sexo==='F' && tempo>=85){
  console.log(`${nome}, você pode se aposentar!`)
}  else {
  console.log (`${nome}, você ainda não pode se aposentar`)
}
