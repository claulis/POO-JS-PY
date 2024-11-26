class Pessoa {
    // Propriedades privadas (com prefixo #)
    #nome;
    #idade;
  
    // Construtor da classe
    constructor() {
      this.#nome;   // Atribuindo valor ao membro privado #nome
      this.#idade; // Atribuindo valor ao membro privado #idade
    }
  
    // Método público para acessar o nome (getter)
    get obterNome() {
      return this.#nome;   // Retorna o valor de #nome
    }
  
    // Método público para acessar a idade (getter)
    get obterIdade() {
      return this.#idade;  // Retorna o valor de #idade
    }
  
    // Método público para alterar o nome (setter)
    /**
   * @param {(arg0: string) => void} novoNome
   */
    set definirNome(novoNome) {
      if (typeof novoNome === 'string' && novoNome.length > 0) {
        this.#nome = novoNome;
      } else {
        console.log('Nome inválido');
      }
    }
  
    // Método público para alterar a idade (setter)
    /**
   * @param {(arg0: number) => void} novaIdade
   */
    set definirIdade(novaIdade) {
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
  
  const pessoa1 = new Pessoa();
  
  // Tentando acessar diretamente os membros privados (isso causará erro) , tire o comentário das linhas abaixo e teste
  //console.log(pessoa1.#nome);  
  // Error: Private field '#nome' must be declared in an enclosing class
  //console.log(pessoa1.#idade); 
  // Error: Private field '#idade' must be declared in an enclosing class
  
  // Modificando os membros privados através dos métodos setters
  pessoa1.definirNome='Carlos';
  pessoa1.definirIdade=30;
  
  // Acessando os dados modificados através dos getters
  console.log(pessoa1.mostrarInformacoes()); // Nome: Carlos, Idade: 30