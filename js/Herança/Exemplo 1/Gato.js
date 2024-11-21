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