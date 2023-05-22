// # Exercício 2

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

// b) Qual o código para imprimir o nome do **último** ator/atriz?

// c) Qual o código para exibir o array com **todas** as transmissões de hoje?

// d) Qual o código para exibir o **horário** de transmissão do filme no **Canal Brasil**?


// **Dica:** construa os caminhos para chegar em cada valor **aos poucos**, sempre verificando o que é exibido no console.


// respostas aqui ⬇️


//a
console.log(filme.elenco[0])
//b
console.log(filme.elenco[filme.elenco.length -1]);
//c
console.log(filme.transmissoesHoje)
//d
console.log(filme.transmissoesHoje[1].horario);