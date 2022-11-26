class Atletas{ 
constructor(atletas){
  this.dadosAtletas = atletas;
}

/*
// Calculo de média
// Calcular média das notas, sem considerar a maior e menor nota
somaNotas(){
this.dadosAtletas.map(function(dados){
let soma = 0  
// Organizando por ordem decrescente
let notasOrganizadas = dados.notasa.sort()
// Dispensando dois items expecíficos da matriz 
let notasComputadas = notasOrganizadas.slice(1,4)
notasComputadas.map(function(notas){
  soma = soma + notas
})
return soma/notasComputadas.length
})
}
*/

// Apresentar nome, notas e média 
mostrarNotas(){
  this.dadosAtletas.map(function(dados){
  let soma = 0  
  // Organizando por ordem decrescente
  let notasOrganizadas = dados.notas.sort()
  // Dispensando dois items expecíficos da matriz 
  let notasComputadas = notasOrganizadas.slice(1,4)
  notasComputadas.map(function(notas){
    soma = soma + notas
  })
  soma = soma/notasComputadas.length
  
console.log(`Atleta: ${dados.nome}`)
console.log(`Notas Obtidas: ${dados.notas}`)
console.log(`Média Válida: ${soma}`)
})
}
}


//----------------------------------------------------------------------------------//


// matrizes de objetos
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

//--------------------------------------------------------------------------------//

// Tudo que estiver dentro [] é matriz/array e dentro do {} é objeto, {..,..} => [0] 

// Classe lê só o primeiro array, depois dá a quantidade
// importando objetos para classe
let infoAtletas = new Atletas(atletas)

infoAtletas.mostrarNotas()


