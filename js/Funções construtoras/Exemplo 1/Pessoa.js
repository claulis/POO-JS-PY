function Pessoa() {
    let nome = ""; // Propriedade "privada"
    let idade = 0; // Propriedade "privada"
  
    // Métodos para acessar as propriedades
    this.setNome = function(novoNome) {
      nome = novoNome;
    };
  
    this.getNome = function() {
      return nome;
    };
  
    this.setIdade = function(novaIdade) {
      idade = novaIdade;
    };
  
    this.getIdade = function() {
      return idade;
    };
  }
  
  // Criando instâncias da função construtora
  const pessoa1 = new Pessoa();
  pessoa1.setNome("Ana"); // Define o nome
  console.log(pessoa1.getNome()); // "Ana"