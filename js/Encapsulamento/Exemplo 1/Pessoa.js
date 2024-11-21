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
  
  // Tentando acessar diretamente os membros privados (isso causará erro) , tire o comentário das linhas abaixo e teste
  //console.log(pessoa1.#nome);  
  // Error: Private field '#nome' must be declared in an enclosing class
  //console.log(pessoa1.#idade); 
  // Error: Private field '#idade' must be declared in an enclosing class
  
  // Modificando os membros privados através dos métodos setters
  pessoa1.definirNome('Carlos');
  pessoa1.definirIdade(30);
  
  // Acessando os dados modificados através dos getters
  console.log(pessoa1.mostrarInformacoes()); // Nome: Carlos, Idade: 30