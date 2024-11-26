class Animal {
    falar() {
      console.log("O animal faz um som.");
    }
  }
  
  class Cachorro extends Animal {
    falar() {
      console.log("O cachorro late.");
    }
  }
  
  class Gato extends Animal {
    falar() {
      console.log("O gato mia.");
    }
  }
  
  const meuCachorro = new Cachorro();
  const meuGato = new Gato();
  
  meuCachorro.falar(); // "O cachorro late."
  meuGato.falar();     // "O gato mia."