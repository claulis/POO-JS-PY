# Prototpype
Em JavaScript, o **prototype** é um conceito fundamental na linguagem que está relacionado ao mecanismo de herança baseado em protótipos (prototype-based inheritance). Ele permite que objetos compartilhem propriedades e métodos por meio de uma cadeia de protótipos (prototype chain).

### O que é o Prototype?

Todo objeto em JavaScript tem uma referência interna chamada `[[Prototype]]`, que aponta para outro objeto (ou é `null`). O `prototype` é uma propriedade específica das funções construtoras, usada para definir as propriedades e métodos que serão herdados por objetos criados a partir dessa função.

#### Principais Pontos:

1. **Prototype de Funções Construtoras**:
   - Quando você define uma função, ela automaticamente tem uma propriedade chamada `prototype`. 
   - Essa propriedade é um objeto que contém as propriedades e métodos que serão herdados pelos objetos criados com a função como construtora (usando `new`).

2. **Acessando o Prototype**:
   - A partir de um objeto, você pode acessar seu protótipo por meio de `Object.getPrototypeOf(obj)` ou `obj.__proto__` (menos recomendado).
   - Em funções, a propriedade `prototype` é usada para estabelecer o protótipo de objetos instanciados.

3. **Herança e Prototype Chain**:
   - Se você tentar acessar uma propriedade ou método em um objeto e ele não existir diretamente, o JavaScript procurará na cadeia de protótipos (`prototype chain`).

---

### Exemplo Prático:

#### Definindo e Usando `prototype` em Funções Construtoras:

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Adicionando um método ao prototype
Pessoa.prototype.saudacao = function() {
  return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
};

// Criando uma instância
const pessoa1 = new Pessoa("Ana", 25);

console.log(pessoa1.saudacao()); // "Olá, meu nome é Ana e tenho 25 anos."

// Verificando o protótipo
console.log(Object.getPrototypeOf(pessoa1)); // Pessoa.prototype
console.log(pessoa1.__proto__ === Pessoa.prototype); // true
```

---

### Propriedades e Métodos Herdados:

Todos os objetos criados em JavaScript herdam propriedades e métodos do protótipo do objeto `Object`, como `toString` e `hasOwnProperty`.

#### Exemplo:
```javascript
const obj = { nome: "João" };

console.log(obj.toString()); // Método herdado do Object.prototype
console.log(obj.hasOwnProperty("nome")); // true
```

---

### Prototype Chain (Cadeia de Protótipos):

Se uma propriedade ou método não for encontrado no objeto, o JavaScript verifica o protótipo do objeto (e assim por diante, até chegar em `null`).

```javascript
function Animal(tipo) {
  this.tipo = tipo;
}

Animal.prototype.comer = function() {
  return `${this.tipo} está comendo.`;
};

const gato = new Animal("Gato");

console.log(gato.comer()); // "Gato está comendo."
console.log(gato.toString()); // Herdado de Object.prototype
console.log(gato.__proto__.__proto__ === Object.prototype); // true
```

---

### Sintaxe Moderna: `class` e Prototype

A introdução de classes em JavaScript (ES6) simplificou a sintaxe, mas o mecanismo por trás continua baseado em protótipos.

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa2 = new Pessoa("Carlos", 30);
console.log(pessoa2.saudacao()); // "Olá, meu nome é Carlos e tenho 30 anos."
```

No exemplo acima, o método `saudacao` é armazenado no `Pessoa.prototype`.
