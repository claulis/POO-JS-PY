# Python

## 1. Variáveis em Python?

Uma variável é um espaço na memória que armazena um valor. Você pode pensar nela como um rótulo que você dá a um dado. Em Python, não é necessário declarar o tipo da variável; o interpretador infere automaticamente.

### Exemplo de Declaração de Variáveis

```python
# Declarando variáveis
nome = "Maria"
idade = 25
altura = 1.65
```

## 2. Tipos de Dados em Python

Python possui vários tipos de dados, os mais comuns incluem:

### 2.1 Números Inteiros (`int`)

Representam números inteiros, positivos ou negativos.

```python
numero_inteiro = 10
```

### 2.2 Números de Ponto Flutuante (`float`)

Representam números com casas decimais.

```python
numero_float = 10.5
```

### 2.3 Strings (`str`)

Representam sequências de caracteres, ou seja, texto.

```python
texto = "Olá, Mundo!"
```

### 2.4 Booleanos (`bool`)

Representam valores lógicos: `True` ou `False`.

```python
verdadeiro = True
falso = False
```

## 3. Entradas de Dados

Para capturar entradas do usuário, utilizamos a função `input()`. O valor retornado é sempre uma string.

### Exemplo de Entrada de Dados

```python
nome = input("Qual é o seu nome? ")
idade = input("Quantos anos você tem? ")
print(f"Olá {nome}, você tem {idade} anos.")
```

**Observação**: Se precisar usar a idade como um número, você deve convertê-la para `int`.

```python
idade = int(input("Quantos anos você tem? "))
```

## 4. Saídas de Dados

Para exibir informações na tela, usamos a função `print()`.

### Exemplo de Saída de Dados

```python
nome = "Carlos"
idade = 30
print(f"O nome dele é {nome} e ele tem {idade} anos.")
```

## 5. Exemplos Práticos

### Exemplo Completo: Calculadora Simples

Vamos criar uma calculadora simples que soma dois números fornecidos pelo usuário.

```python
# Entrada de dados
numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))

# Cálculo da soma
soma = numero1 + numero2

# Saída de dados
print(f"A soma de {numero1} e {numero2} é {soma}.")
```

