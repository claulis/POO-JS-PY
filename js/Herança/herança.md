# Herança em JavaScript com a Sintaxe de Classe (ES6)

A partir do **ECMAScript 6 (ES6)**, JavaScript introduziu a sintaxe de **classes**, que simplificou a criação de classes e a implementação de herança, deixando o código mais legível e intuitivo, sem precisar lidar diretamente com **protótipos** como na abordagem anterior.

A **herança clássica em JavaScript** com classes segue o mesmo padrão encontrado em linguagens tradicionais de Programação Orientada a Objetos (POO), como Java ou C#. Nessa abordagem, você pode criar uma **classe base (superclasse)** e **extender** essa classe em uma **classe derivada (subclasse)**, que herda as propriedades e métodos da classe base.

### **Como funciona a Herança com a Sintaxe de Classe (ES6)**

1. **Classe Base (Superclasse)**: É a classe que define as propriedades e comportamentos comuns.
2. **Classe Derivada (Subclasse)**: É a classe que herda as propriedades e comportamentos da classe base e pode adicionar ou modificar funcionalidades específicas.

### **Exemplo de Herança com Classes (ES6)**

```javascript
// Classe base (superclasse)
class Animal {
  // Construtor da classe base
  constructor(nome) {
    this.nome = nome;
  }

  // Método da classe base
  falar() {
    console.log(this.nome + ' faz um som.');
  }
}

// Classe derivada (subclasse) que estende a classe Animal
class Cachorro extends Animal {
  // Construtor da classe derivada
  constructor(nome, raca) {
    // Chama o construtor da classe base
    super(nome);  // super() chama o construtor da classe Animal
    this.raca = raca;  // Propriedade adicional da subclasse
  }

  // Sobrescreve o método da classe base
  falar() {
    console.log(this.nome + ' late.');
  }

  // Novo método na subclasse
  mostrarRaca() {
    console.log('Raça: ' + this.raca);
  }
}

// Criando uma instância da subclasse Cachorro
const meuCachorro = new Cachorro('Rex', 'Labrador');

// Chamando métodos da subclasse e da superclasse
meuCachorro.falar();        // Rex late.
meuCachorro.mostrarRaca();  // Raça: Labrador

// A classe derivada pode acessar os métodos da classe base
console.log(meuCachorro.nome); // Rex
```

### **Explicação:**

1. **Classe Base `Animal`**:
   - A classe `Animal` tem um construtor que define a propriedade `nome` e um método `falar()`, que exibe uma mensagem genérica.
   
2. **Classe Derivada `Cachorro`**:
   - A classe `Cachorro` **herda** da classe `Animal` usando a palavra-chave `extends`.
   - O construtor da classe `Cachorro` chama o construtor da classe base usando `super(nome)`. Isso permite que a classe `Cachorro` herde a propriedade `nome` de `Animal`.
   - A classe `Cachorro` também **sobrescreve** o método `falar()`, proporcionando uma implementação mais específica para cachorros (fazendo o cachorro "latir").
   - A classe `Cachorro` tem um método adicional `mostrarRaca()` para exibir a raça do cachorro.

3. **Métodos e Propriedades**:
   - **Herança**: A instância de `Cachorro` herda o método `falar()` de `Animal`, mas o sobrescreve para um comportamento mais específico.
   - **Uso de `super()`**: O método `super()` é usado para invocar o construtor da classe base, permitindo que as propriedades e comportamentos da classe `Animal` sejam herdados pela classe `Cachorro`.
   - **Novos Métodos**: A subclasse pode adicionar seus próprios métodos, como o `mostrarRaca()`.

### **Resumo das Palavras-chave:**

1. **`extends`**: Usada para indicar que uma classe herda de outra. No exemplo, `Cachorro extends Animal` significa que `Cachorro` é uma subclasse de `Animal` e herda seus métodos e propriedades.
   
2. **`super()`**: Chama o construtor da classe base. Isso é necessário dentro do construtor da subclasse para garantir que as propriedades da classe base sejam inicializadas corretamente. `super(nome)` chama o construtor de `Animal` e passa o `nome` como argumento.

3. **Sobrescrita de Métodos**: A subclasse pode sobrescrever (ou seja, redefinir) métodos da classe base. No exemplo, o método `falar()` foi sobrescrito na subclasse `Cachorro`.

### **Herança de Métodos e Propriedades**

Com a herança baseada em classes, a subclasse herda todos os **métodos e propriedades** da superclasse, exceto o construtor, que precisa ser explicitamente chamado usando `super()`. Isso significa que a subclasse pode usar e/ou modificar os comportamentos da superclasse.

### **Exemplo de Herança de Propriedades**

```javascript
class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método que pode ser herdado
  info() {
    console.log(`${this.nome} tem ${this.idade} anos.`);
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);  // Chama o construtor da classe Animal
    this.cor = cor;      // Propriedade específica de Gato
  }

  // Sobrescreve o método info
  info() {
    super.info(); // Chama o método info da classe Animal
    console.log(`${this.nome} tem a cor ${this.cor}.`);
  }
}

const meuGato = new Gato('Miau', 2, 'preto');
meuGato.info();
// Saída:
// Miau tem 2 anos.
// Miau tem a cor preto.
```

### **Conclusão**

A herança em JavaScript com a sintaxe de classes permite criar hierarquias de classes de maneira mais clara e estruturada, sem a necessidade de manipular diretamente protótipos. Com **`extends`** e **`super()`**, você pode facilmente definir classes base e derivadas, herdando comportamentos e modificando conforme necessário. Isso facilita a reutilização de código e a organização de sistemas mais complexos em JavaScript.

- **`extends`** cria a relação de herança entre classes.
- **`super()`** é utilizado para chamar métodos e o construtor da classe base.

