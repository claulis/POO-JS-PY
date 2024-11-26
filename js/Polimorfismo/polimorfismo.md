# Polimorfismo

O **polimorfismo** em JavaScript é um conceito da programação orientada a objetos que permite que métodos ou funções assumam diferentes comportamentos dependendo do contexto em que são utilizados. Ele deriva do termo grego "poly" (muitos) e "morphos" (formas), ou seja, "muitas formas".

Em JavaScript, o polimorfismo é implementado de forma dinâmica devido à natureza flexível da linguagem. Ele é frequentemente usado em conjunto com herança e interfaces (mesmo que JavaScript não tenha suporte nativo para interfaces).

---

### Tipos de Polimorfismo em JavaScript

1. **Polimorfismo de Sobrecarga (Overloading)**:
   - Definir múltiplos métodos com o mesmo nome, mas diferentes assinaturas (número ou tipos de parâmetros).
   - Não é suportado diretamente em JavaScript, mas pode ser simulado.

2. **Polimorfismo de Substituição (Overriding)**:
   - Um método em uma classe filha substitui o método da classe pai com o mesmo nome.

3. **Polimorfismo Paramétrico**:
   - Um método ou função é implementado para funcionar com diferentes tipos de dados.

---

### Exemplos de Polimorfismo

#### 1. Polimorfismo de Sobrecarga (Simulado)
JavaScript não suporta sobrecarga nativamente, mas podemos simulá-la verificando o número ou o tipo dos argumentos.

```javascript
function saudacao(nome, idade) {
  if (idade === undefined) {
    return `Olá, ${nome}!`;
  }
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}

console.log(saudacao("Ana")); // "Olá, Ana!"
console.log(saudacao("Carlos", 30)); // "Olá, Carlos! Você tem 30 anos."
```

Aqui, a função `saudacao` apresenta comportamentos diferentes dependendo dos parâmetros passados.

---

#### 2. Polimorfismo de Substituição (Overriding)

Com herança, uma classe filha pode sobrescrever métodos da classe pai.

```javascript
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
```

Aqui:
- O método `falar` é polimórfico. Ele assume diferentes comportamentos dependendo do objeto que o chama.

---

#### 3. Polimorfismo Paramétrico

Uma função genérica pode operar com diferentes tipos de dados.

```javascript
function imprimir(valor) {
  console.log(`Valor: ${valor}`);
}

imprimir(42);        // Valor: 42
imprimir("Olá!");    // Valor: Olá!
imprimir([1, 2, 3]); // Valor: 1,2,3
```

A função `imprimir` funciona com números, strings e arrays sem precisar ser redefinida.

---

### Polimorfismo Dinâmico em JavaScript

Devido ao sistema dinâmico de tipos de JavaScript, métodos ou propriedades podem ser substituídos em tempo de execução, permitindo flexibilidade adicional.

```javascript
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
```

Aqui:
- Cada objeto (`Retangulo`, `Circulo`, `Forma`) fornece sua própria implementação de `calcularArea`, exibindo o comportamento polimórfico.

---

### Polimorfismo e Interfaces (Simulado em JavaScript)

Embora JavaScript não tenha suporte nativo a **interfaces** como Java ou C#, o comportamento polimórfico pode ser simulado seguindo contratos implícitos entre classes.

```javascript
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
```

Neste exemplo:
- A classe base `Impressora` age como uma interface, e suas subclasses implementam o método `imprimir` de forma específica.
