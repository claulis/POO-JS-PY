# Retangulo.py

---

```python
# Definindo a classe Retangulo
class Retangulo:
    
    # Método construtor para inicializar os atributos da classe
    def __init__(self, altura, base):
        # Atributo 'Altura' é atribuído ao objeto atual
        self.Altura = altura
        # Atributo 'Base' é atribuído ao objeto atual
        self.Base = base

    # Método para calcular o perímetro do retângulo
    def CalculaPerimetro(self):
        # Retorna o cálculo do perímetro: 2 vezes a altura mais 2 vezes a base
        return (2 * self.Altura) + (2 * self.Base)

    # Método para calcular a área do retângulo
    def CalculaArea(self):
        # Retorna o cálculo da área: altura multiplicada pela base
        return (self.Altura * self.Base)
    
# Solicita ao usuário para inserir o valor da base como número de ponto flutuante
base = float(input("Digite o valor da base "))
# Solicita ao usuário para inserir o valor da altura como número de ponto flutuante
altura = float(input("Digite a altura "))
# Cria um objeto da classe Retangulo com os valores da base e altura informados
retangulo1 = Retangulo(altura, base)
# Chama o método para calcular o perímetro e imprime o resultado
print(retangulo1.CalculaPerimetro())
# Chama o método para calcular a área e imprime o resultado
print(retangulo1.CalculaArea())
```

---

## Explicação Detalhada

### 1. **`class Retangulo:`**

```python
class Retangulo:
```

- Define uma nova classe chamada `Retangulo`. A classe funciona como um molde que representa um retângulo.
- **Contexto**: A classe contém atributos e métodos relacionados ao conceito matemático de um retângulo.

---

### 2. **Método Construtor**

```python
def __init__(self, altura, base):
    self.Altura = altura
    self.Base = base
```

-  `__init__` é o método especial que é chamado automaticamente toda vez que você cria uma nova instância da classe.
- **Parâmetros**:
  - `altura` e `base`: Valores passados ao criar um objeto.
- **`self.Altura = altura`**: Atribui o valor da altura ao atributo `Altura` do objeto.
- **`self.Base = base`**: Atribui o valor da base ao atributo `Base` do objeto.

---

### 3. **Cálculo do Perímetro**

```python
def CalculaPerimetro(self):
    return (2 * self.Altura) + (2 * self.Base)
```

- Define um método que calcula o perímetro de um retângulo.
- **Fórmula do Perímetro**: \( P = 2 \times \text{altura} + 2 \times \text{base} \)
- **Retorno**: A função retorna o valor calculado com base nos atributos do objeto.

---

### 4. **Cálculo da Área**

```python
def CalculaArea(self):
    return (self.Altura * self.Base)
```

- Define um método que calcula a área do retângulo.
- **Fórmula da Área**: \( A = \text{altura} \times \text{base} \)
- **Retorno**: A função retorna o valor calculado com base nos atributos do objeto.

---

### 5. **Entrada do Usuário para Base e Altura**

```python
base = float(input("Digite o valor da base "))
altura = float(input("Digite a altura "))
```

- **`input()`**: Solicita ao usuário que insira um valor.
- **`float()`**: Converte a entrada do usuário para um número de ponto flutuante, permitindo cálculos com casas decimais.
- O usuário informa os valores da base e altura do retângulo.

---

### 6. **Criação da Instância da Classe**

```python
retangulo1 = Retangulo(altura, base)
```

- Cria uma nova instância da classe `Retangulo` chamada `retangulo1`.
- **Parâmetros**: Passa `altura` e `base` para o método `__init__` da classe.
- **O objeto `retangulo1` agora possui atributos `Altura` e `Base` com os valores fornecidos pelo usuário.**

---

### 7. **Chamada do Método para Calcular Perímetro**

```python
print(retangulo1.CalculaPerimetro())
```

- Chama o método `CalculaPerimetro()` no objeto `retangulo1`.
- **Retorno esperado**: O perímetro do retângulo calculado usando a fórmula \( 2 \times \text{altura} + 2 \times \text{base} \).

---

### 8. **Chamada do Método para Calcular Área**

```python
print(retangulo1.CalculaArea())
```

- **O que faz?**: Chama o método `CalculaArea()` no objeto `retangulo1`.
- **Retorno esperado**: A área do retângulo calculada usando a fórmula \( \text{altura} \times \text{base} \).

---

## 📊 **Exemplo de Execução**

Se o usuário digitar:
```
Digite o valor da base 5
Digite a altura 3
```

O programa calculará:

- **Perímetro**: \( 2 \times 3 + 2 \times 5 = 6 + 10 = 16 \)
- **Área**: \( 3 \times 5 = 15 \)

**Saída esperada:**

```
16
15
```

---
