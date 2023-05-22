// # Exercício 3

// Observe o objeto abaixo e, utilizando o **espalhamento** (ou **spread**), resolva os exercícios a seguir:


const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}


// a) Crie uma **cópia** do objeto acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.

// c) Crie um objeto de `ataque` com a estrutura abaixo e **o adicione no array `ataques`**, utilizando `**push()**`:

// ```
// nome: "Investida",
// dano: 40,
// tipo: "Normal",
// precisao: 100
// ```

// d) Na cópia do objeto original, ou seja, no objeto que representa o **Squirtle**, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original.

// e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: **“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**.

// f) Para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.

// g) Imprima ambos os objetos no console e verifique se todas as informações adicionadas aparecem na impressão.


//a
const copiaPokemon ={
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água",
    
}

//b
pokemon1.ataques =[]

//c
pokemon1.ataques.push(
    {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
    }
)


//d
copiaPokemon.ataques = [...pokemon1.ataques]

//e

pokemon1.ataques.push(
    {
    nome: "Folha navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100
    }
)

//f

copiaPokemon.ataques.push(
    {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
    }
)

//g

console.log(pokemon1,copiaPokemon);
