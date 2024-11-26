# Funções Construtoras

Em JavaScript, uma **função construtora** é uma função especial usada para criar e inicializar objetos. Ela é projetada para ser chamada com o operador `new`, que permite instanciar objetos com uma estrutura e valores definidos.

---

### Características de uma Função Construtora:

1. **Definição com a Primeira Letra Maiúscula**: 
   - Por convenção, os nomes das funções construtoras começam com letra maiúscula, diferenciando-as de funções normais.

2. **Uso do `new`**:
   - Ao usar o operador `new` com uma função construtora, acontece o seguinte:
     - Um novo objeto é criado.
     - O protótipo desse objeto (`[[Prototype]]`) é configurado para ser o objeto associado à propriedade `prototype` da função construtora.
     - O `this` dentro da função passa a referir-se ao novo objeto.
     - Se a função não retornar explicitamente um objeto, ela retornará implicitamente o novo objeto criado.

3. **Propriedades e Métodos**:
   - Propriedades únicas podem ser definidas diretamente no `this` dentro da função.
   - Métodos compartilhados são normalmente definidos no `prototype` da função, evitando duplicação em cada instância.

---

### Estrutura de uma Função Construtora:

```javascript
function Pessoa(nome, idade) {
  this.nome = nome; // Propriedade única
  this.idade = idade; // Propriedade única
}

// Adicionando métodos ao prototype
Pessoa.prototype.saudacao = function() {
  return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
};

// Criando instâncias da função construtora
const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("Carlos", 30);

console.log(pessoa1.saudacao()); // "Olá, meu nome é Ana e tenho 25 anos."
console.log(pessoa2.saudacao()); // "Olá, meu nome é Carlos e tenho 30 anos."

// Verificando o protótipo
console.log(pessoa1.__proto__ === Pessoa.prototype); // true
```

---

### Por Que Usar Funções Construtoras?

- **Reutilização de Código**: As funções construtoras permitem criar várias instâncias do mesmo "tipo" de objeto sem repetir o código.
- **Herança Prototípica**: Você pode adicionar métodos compartilhados ao `prototype` da função, tornando o código mais eficiente em termos de memória.
- **Organização de Objetos**: Funções construtoras permitem organizar o código de forma mais estruturada, semelhante a classes.

---

### O que Acontece Internamente com `new`?

Ao usar `new` com uma função construtora, o JavaScript realiza os seguintes passos:

1. Cria um novo objeto vazio.
   ```javascript
   const obj = {};
   ```
2. Configura o protótipo do objeto para ser igual à propriedade `prototype` da função.
   ```javascript
   obj.__proto__ = FuncaoConstrutora.prototype;
   ```
3. Define o `this` dentro da função como o novo objeto.
4. Executa o código da função construtora.
5. Retorna o novo objeto (a menos que um outro objeto seja explicitamente retornado).

---

### Comparação com Funções Normais:

A diferença principal entre uma função normal e uma função construtora está no uso do `new`. Uma função comum não cria um novo objeto automaticamente nem associa o `this` a ele.

#### Função Comum:
```javascript
function comum() {
  this.propriedade = "valor"; // Erro: o `this` não se refere a um novo objeto
}
comum(); // Executa sem criar um objeto
```

#### Função Construtora:
```javascript
function Construtora() {
  this.propriedade = "valor"; // `this` é o novo objeto criado com `new`
}
const obj = new Construtora();
console.log(obj.propriedade); // "valor"
```

---

### Com a Introdução de `class` no ES6:

Embora as funções construtoras ainda sejam amplamente usadas, o ES6 introduziu a sintaxe de classes, que simplifica a criação de objetos enquanto mantém a mesma lógica de protótipos.

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

const pessoa = new Pessoa("João", 40);
console.log(pessoa.saudacao()); // "Olá, meu nome é João e tenho 40 anos."
