# 🎲 | databit js 

**[🇺🇲 Inglês ](#beginning)**

**[🇧🇷 Português ](#inicio)**

## Inicio 

### Uma maneira simplificada de gerar dados fictícios massivos com base em um esquema no objeto json criado 🎲

-------------
## Instalação

Instale as dependências com os seguintes comandos: 

```sh
npm i databitjs
```

-------------

## Tipos de dados

* username - Cria nomes aleatórios 
* text - Texto pequeno
* shortText - Texto curto
* longText - Texto longo
* boolean - Valor verdadeiro ou falso
* int - Numero inteiro 
* float - Numero em ponto flutuante
* date - Data atual
* color - Gera uma cor em RGB
* email - Gera um e-mail aleatório 
* telephone - Numero de telefone

-------------

## Exemplos de como utilizar 
#### A função dataBit() recebe dois parâmetros 
#### Primeiro parâmetros é o modelo que você deseja e o segundo parâmetro é de quantos objetos/json vai criar como no exemplo abaixo vai gerar dois objetos


```javascript
const dataBit = require('databitjs')

let dados = dataBit({
    nome: "username",
    solteiro: "boolean",
    cor: "color",
    numero: "float",
    email: "email",
    filho: {
        nome: "username",
        email: "email",
        telefone: "telephone"
    }
}, 2) // <-- O número dois seria a quantidade de objetos que vai gerar

console.log(dados)

// Output 

[
  {
    nome: 'eripik',
    solteiro: false,
    cor: '#C190EE',
    numero: 9.700662658760152,
    email: 'itayav@email.com',
    filho: {
      nome: 'oxuf',
      email: 'isuyiyaw@email.com',
      email2: 'owek@email.com'
    }
  },
  {
    nome: 'ubeses',
    solteiro: false,
    cor: '#DE9991',
    numero: 4.488406920840892,
    email: 'aloxuq@email.com',
    filho: {
      nome: 'isanom',
      email: 'uyudej@email.com',
      email2: 'ohag@email.com'
    }
  }
]

```

## Licença

**Software Livre, claro que sim!**


🇺🇲
## Beginning

### A simplified way to generate massive dummy data based on a schema in the created json object 🎲

-------------

## Installation

Install dependencies with the following commands: 

```sh
npm i databitjs
```

-------------

## Types of data

* username - Create random names
* text - Small text
* shortText - Short text
* longText - long text
* boolean - True or false value
* int - Integer
* float - floating point number
* date - current date
* color - Generates a color in RGB
* email - Generates a random email
* telephone - Telephone number

-------------

## Examples of how to use
#### The dataBit() function takes two parameters
#### First parameter is the model you want and the second parameter is how many objects/json will create as in the example below will generate two objects

```javascript
const dataBit = require('databitjs')

let data = dataBit({
    name: "username",
    single: "boolean",
    color: "color",
    number: "float",
    email: "email",
    son: {
        name: "username",
        email: "email",
        telephone: "telephone"
    }
}, 2) // <-- Number two would be the number of objects it will generate

console.log(data)

// Output 

[
  {
    name: 'eripik',
    single: false,
    color: '#C190EE',
    number: 9.700662658760152,
    email: 'itayav@email.com',
    son: {
      name: 'oxuf',
      email: 'isuyiyaw@email.com',
      email2: 'owek@email.com'
    }
  },
  {
    name: 'ubeses',
    single: false,
    color: '#DE9991',
    number: 4.488406920840892,
    email: 'aloxuq@email.com',
    son: {
      name: 'isanom',
      email: 'uyudej@email.com',
      email2: 'ohag@email.com'
    }
  }
]

```

## License

**Free Software, Hell Yeah!**