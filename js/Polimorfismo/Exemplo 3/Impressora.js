class Impressora {
    imprimir() {
      throw new Error("Método 'imprimir' deve ser implementado.");
    }
  }
  
  class ImpressoraTexto extends Impressora {
    imprimir() {
      console.log("Imprimindo um texto...");
    }
  }
  
  class ImpressoraImagem extends Impressora {
    imprimir() {
      console.log("Imprimindo uma imagem...");
    }
  }
  
  const impressoras = [new ImpressoraTexto(), new ImpressoraImagem()];
  
  impressoras.forEach(impressora => {
    impressora.imprimir();
  });