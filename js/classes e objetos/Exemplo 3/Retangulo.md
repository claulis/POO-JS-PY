Este código implementa uma abstração de retângulo, permitindo criar retângulos com diferentes dimensões e calcular suas propriedades, como perímetro e área. O uso de métodos facilita o acesso a essas propriedades, e a comparação entre objetos `Retangulo` ilustra como instâncias podem ser manipuladas e comparadas dentro de um contexto de programação orientada a objetos.

### Classe `Retangulo`

A classe `Retangulo` é usada para representar um retângulo com propriedades de base e altura, e possui métodos para calcular o perímetro e a área.

```javascript
class Retangulo {
    constructor(_base, _altura) {
        this.base = _base;
        this.altura = _altura;
    }
```

1. **Construtor (`constructor`)**
   - O `constructor` recebe dois parâmetros, `_base` e `_altura`, e os atribui às propriedades `base` e `altura` do objeto. Essas propriedades representam, respectivamente, a base e a altura de um retângulo.
   - `this.base = _base;` e `this.altura = _altura;` armazenam os valores recebidos no próprio objeto, permitindo que os métodos da classe usem essas dimensões.

### Métodos para Cálculo

#### Método `calculaPerimetro`

```javascript
    calculaPerimetro() {
        return this.base * 2 + this.altura * 2;
    }
```

- Este método calcula o perímetro do retângulo. A fórmula do perímetro é dada por `2 * base + 2 * altura`.
- O cálculo retorna o valor do perímetro usando `this.base` e `this.altura` para acessar as dimensões do objeto.

#### Método `calculaArea`

```javascript
    calculaArea() {
        return this.base * this.altura;
    }
```

- Este método calcula a área do retângulo. A área é calculada pela fórmula `base * altura`.
- O método retorna o valor da área, multiplicando `this.base` por `this.altura`.

### Criação de Objetos e Comparação

Abaixo, criamos dois objetos `Retangulo` com diferentes valores de base e altura:

```javascript
const retangulo1 = new Retangulo(10.0, 3.5);
const retangulo2 = new Retangulo(8.0, 2.0);
```

1. **Objeto `retangulo1`**: Base = 10.0 e Altura = 3.5.
2. **Objeto `retangulo2`**: Base = 8.0 e Altura = 2.0.

Esses objetos são instâncias da classe `Retangulo` e têm acesso aos métodos `calculaPerimetro` e `calculaArea`.

### Comparação de Perímetro e Área

Por fim, o código calcula e exibe as diferenças entre os perímetros e as áreas dos dois retângulos:

```javascript
const diffPerimetro = retangulo1.calculaPerimetro() - retangulo2.calculaPerimetro();
console.log(`A diferença dos perimetros é ${diffPerimetro}`);
```

- `diffPerimetro` armazena a diferença entre o perímetro de `retangulo1` e o de `retangulo2`.
- `console.log` exibe o resultado com uma mensagem formatada.

```javascript
const diffArea = retangulo1.calculaArea() - retangulo2.calculaArea();
console.log(`A diferença das áreas é ${diffArea}`);
```

- `diffArea` calcula a diferença entre a área de `retangulo1` e `retangulo2`.
- A diferença é exibida no console com uma mensagem informativa.

