# Encapsulamento

O **encapsulamento** é um dos pilares da Programação Orientada a Objetos (POO), e tem como objetivo proteger os dados internos de um objeto e controlar o acesso a esses dados. No contexto de JavaScript, encapsulamento envolve:

1. **Definir propriedades e métodos privados**: Impedir que propriedades internas do objeto sejam modificadas ou acessadas diretamente de fora da classe.
2. **Expor uma interface pública controlada**: Tornar disponível para o mundo exterior apenas um conjunto específico de métodos para interagir com as propriedades internas.

### **Como o Encapsulamento é Implementado em JavaScript**

Embora o JavaScript seja uma linguagem que não tenha suporte a modificadores de acesso tradicionais como `private`, `protected` ou `public` (como em Java, C# ou C++), a partir do ES6, foi introduzido o conceito de **membros privados** utilizando o prefixo `#`. Além disso, os métodos e propriedades podem ser manipulados dentro de uma classe para oferecer um controle sobre o acesso a dados sensíveis.

#### 1. **Propriedades Privadas com o Prefixo `#`**
No JavaScript moderno (ES2022+), podemos usar o prefixo `#` para definir propriedades e métodos privados dentro de uma classe. Esses membros privados só podem ser acessados dentro da própria classe, e tentativas de acessá-los diretamente de fora resultarão em erro.

#### 2. **Métodos Públicos e Getters/Setters**
Para fornecer acesso controlado aos membros privados, podemos usar métodos públicos, incluindo **getters** (para obter o valor) e **setters** (para modificar o valor). Eles atuam como uma interface segura para interagir com as propriedades privadas.

### **Exemplo de Encapsulamento com Membros Privados**

Aqui está um exemplo para ilustrar o funcionamento do encapsulamento com membros privados em JavaScript:

```javascript
class Pessoa {
  // Propriedades privadas (com prefixo #)
  #nome;
  #idade;

  // Construtor da classe
  constructor(nome, idade) {
    this.#nome = nome;   // Atribuindo valor ao membro privado #nome
    this.#idade = idade; // Atribuindo valor ao membro privado #idade
  }

  // Método público para acessar o nome (getter)
  obterNome() {
    return this.#nome;   // Retorna o valor de #nome
  }

  // Método público para acessar a idade (getter)
  obterIdade() {
    return this.#idade;  // Retorna o valor de #idade
  }

  // Método público para alterar o nome (setter)
  definirNome(novoNome) {
    if (typeof novoNome === 'string' && novoNome.length > 0) {
      this.#nome = novoNome;
    } else {
      console.log('Nome inválido');
    }
  }

  // Método público para alterar a idade (setter)
  definirIdade(novaIdade) {
    if (novaIdade >= 0) {
      this.#idade = novaIdade;
    } else {
      console.log('Idade inválida');
    }
  }

  // Método público para mostrar informações
  mostrarInformacoes() {
    return `Nome: ${this.#nome}, Idade: ${this.#idade}`;
  }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa('João', 25);

// Usando os métodos públicos para acessar os membros privados
console.log(pessoa1.mostrarInformacoes()); // Nome: João, Idade: 25

// Tentando acessar diretamente os membros privados (isso causará erro)
console.log(pessoa1.#nome);  // Error: Private field '#nome' must be declared in an enclosing class
console.log(pessoa1.#idade); // Error: Private field '#idade' must be declared in an enclosing class

// Modificando os membros privados através dos métodos setters
pessoa1.definirNome('Carlos');
pessoa1.definirIdade(30);

// Acessando os dados modificados através dos getters
console.log(pessoa1.mostrarInformacoes()); // Nome: Carlos, Idade: 30
```

### **Explicação do Código**

1. **Propriedades Privadas**:
   - As propriedades `#nome` e `#idade` são privadas e não podem ser acessadas diretamente de fora da classe.
   - Se tentar acessar diretamente `#nome` ou `#idade` de fora, JavaScript gerará um erro, indicando que essas propriedades são privadas.

2. **Métodos Públicos**:
   - A classe tem métodos **públicos** como `obterNome`, `obterIdade`, `definirNome`, `definirIdade`, e `mostrarInformacoes`.
   - Esses métodos atuam como uma **interface pública** que permite controlar e modificar as propriedades privadas de forma controlada e segura.

3. **Getters e Setters**:
   - `obterNome` e `obterIdade` funcionam como **getters**, permitindo acessar os valores de `#nome` e `#idade`.
   - `definirNome` e `definirIdade` são **setters**, permitindo alterar esses valores de maneira controlada. Eles validam as entradas antes de atualizar as propriedades privadas.

### **Membros Privados (com o `#`)**

- **Membros privados**: Propriedades ou métodos que são acessíveis apenas dentro da própria classe. Isso significa que dados sensíveis ou internos não podem ser acessados diretamente por outras partes do código.
- **Proteção de dados**: O `#` impede que os membros privados sejam acessados ou modificados diretamente por código fora da classe. Isso ajuda a garantir a integridade dos dados e o controle sobre como eles são manipulados.
- **Encapsulamento e segurança**: Ao usar membros privados, você está implementando o encapsulamento, o que torna o código mais seguro e robusto, já que os dados internos ficam protegidos de mudanças inesperadas.

