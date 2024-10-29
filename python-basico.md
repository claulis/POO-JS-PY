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
## 6. Estrutura Condicional
As estruturas condicionais permitem que o programa execute diferentes blocos de código com base em condições específicas. Isso é essencial para a lógica de programação e para a criação de aplicações dinâmicas.

### Estrutura Geral

```python
if condição1:
    # Código a ser executado se condição1 for verdadeira
elif condição2:
    # Código a ser executado se condição1 for falsa e condição2 for verdadeira
else:
    # Código a ser executado se todas as condições anteriores forem falsas
```

### If Else

1. **If**
   - A instrução `if` é usada para verificar uma condição. Se a condição for verdadeira, o bloco de código associado é executado.

   **Exemplo:**
   ```python
   idade = 18
   if idade >= 18:
       print("Você é maior de idade.")
   ```

2. **Else**
   - A instrução `else` é usada como uma alternativa. Se a condição do `if` for falsa, o bloco de código no `else` será executado.

   **Exemplo:**
   ```python
   idade = 16
   if idade >= 18:
       print("Você é maior de idade.")
   else:
       print("Você é menor de idade.")
   ```

3. **Elif (Else If)**
   - O `elif` permite verificar múltiplas condições. Se a condição do `if` for falsa, o programa verifica a condição do `elif`. Você pode ter quantos `elif` quiser.

   **Exemplo:**
   ```python
   nota = 75
   if nota >= 90:
       print("Aprovado com Distinção.")
   elif nota >= 70:
       print("Aprovado.")
   else:
       print("Reprovado.")
   ```
#### Exercícios Práticos

1. **Verificação de Paridade**
   - Programa que verifique se um número é par ou ímpar.

   **Sugestão de código:**
   ```python
   numero = int(input("Digite um número: "))
   if numero % 2 == 0:
       print("O número é par.")
   else:
       print("O número é ímpar.")
   ```

2. **Classificação de Idade**
   - Programa que classifique uma pessoa como criança, adolescente ou adulto com base na idade.

   **Sugestão de código:**
   ```python
   idade = int(input("Digite a sua idade: "))
   if idade < 12:
       print("Você é uma criança.")
   elif idade < 18:
       print("Você é um adolescente.")
   else:
       print("Você é um adulto.")
   ```


