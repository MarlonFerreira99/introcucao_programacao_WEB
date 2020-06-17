// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//   { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//   { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//   { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML','CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] },
    { nome: 'Marlon', tecnologias: ['CSS', 'HTML', 'JavaScript']}
];


function listaUsuarios(usuario){
  let lista = ''
  for (i=0; i<usuario.length; i++){
    lista = console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
  }
  return lista
}
const escreva = listaUsuarios(usuarios)

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário 
// trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCss(usuario) {
  for (let tecnologia of usuario.tecnologias) {
      if (tecnologia == 'CSS') return true
  }
  return false
}

// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, 
// se SIM, imprima em tela as informações do usuário

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuarios[i])

  if (usuarioTrabalhaComCss) {
      console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`)
  }
}