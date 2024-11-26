class Forma {
    calcularArea() {
      return 0; // Método padrão
    }
  }
  
  class Retangulo extends Forma {
    constructor(largura, altura) {
      super();
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura;
    }
  }
  
  class Circulo extends Forma {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio * this.raio;
    }
  }
  
  const formas = [
    new Retangulo(10, 5),
    new Circulo(7),
    new Forma()
  ];
  
  formas.forEach(forma => {
    console.log(forma.calcularArea());
  });
  