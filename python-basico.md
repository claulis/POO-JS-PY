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


### match-case 

A estrutura `match-case` permite que você verifique uma variável contra múltiplos padrões de maneira organizada. É especialmente útil em casos onde você precisa lidar com vários casos diferentes para uma única variável.

### Sintaxe Básica

A sintaxe básica do `match-case` é a seguinte:

```python
match variável:
    case padrão1:
        # Código para padrão1
    case padrão2:
        # Código para padrão2
    case _:
        # Código para outros casos (caso padrão)
```

### Exemplos Práticos

1. **Uso Básico**

   Vamos considerar um exemplo simples onde classificamos um dia da semana:

   ```python
   dia = "terça"

   match dia:
       case "segunda":
           print("Hoje é segunda-feira.")
       case "terça":
           print("Hoje é terça-feira.")
       case "quarta":
           print("Hoje é quarta-feira.")
       case "quinta":
           print("Hoje é quinta-feira.")
       case "sexta":
           print("Hoje é sexta-feira.")
       case _:
           print("É um dia do fim de semana ou um dia inválido.")
   ```

2. **Correspondência de Padrões**

   Você pode usar várias condições em um único `case`:

   ```python
   fruta = "maçã"

   match fruta:
       case "maçã" | "banana":
           print("Fruta comum.")
       case "abacaxi":
           print("Fruta tropical.")
       case _:
           print("Fruta desconhecida.")
   ```

Claro! Vamos abordar os tipos de laços de repetição em Python. Os laços (ou loops) são fundamentais para executar um bloco de código várias vezes, dependendo de uma condição. Aqui estão os principais tipos de laços em Python:

## 7. Laços de Repetição 

Os laços permitem que um bloco de código seja executado repetidamente, o que é essencial para a automação de tarefas e processamento de coleções de dados.

### Tipos de Laços

1. **Laço `for`**
   - O laço `for` é usado para iterar sobre uma sequência (como uma lista, tupla, string ou range). É útil quando você sabe quantas vezes deseja executar o bloco de código.

   **Sintaxe:**
   ```python
   for item in sequência:
       # Código a ser executado
   ```

   **Exemplo:**
   ```python
   frutas = ["maçã", "banana", "laranja"]
   for fruta in frutas:
       print(fruta)
   ```

   **Exemplo com `range`:**
   ```python
   for i in range(5):
       print(i)
   ```

2. **Laço `while`**
   - O laço `while` continua executando um bloco de código enquanto uma condição for verdadeira. É útil quando o número de iterações não é conhecido previamente.

   **Sintaxe:**
   ```python
   while condição:
       # Código a ser executado
   ```

   **Exemplo:**
   ```python
   contador = 0
   while contador < 5:
       print(contador)
       contador += 1
   ```

### Controle de Laços

1. **`break`**
   - A instrução `break` é usada para sair de um laço, interrompendo sua execução imediatamente.

   **Exemplo:**
   ```python
   for i in range(10):
       if i == 5:
           break
       print(i)
   ```

2. **`continue`**
   - A instrução `continue` faz com que o laço ignore a iteração atual e continue com a próxima.

   **Exemplo:**
   ```python
   for i in range(10):
       if i % 2 == 0:
           continue
       print(i)  # Imprime apenas números ímpares
   ```

3. **`else` em Laços**
   - Você pode adicionar uma cláusula `else` a um laço. O código dentro do `else` será executado quando o laço terminar normalmente (ou seja, não foi interrompido por um `break`).

   **Exemplo:**
   ```python
   for i in range(5):
       print(i)
   else:
       print("Laço concluído!")
   ```

### Exercícios Práticos

1. **Contagem Regressiva**
   - Escreva um programa que faça uma contagem regressiva de 10 a 0.

   **Sugestão de código:**
   ```python
   contador = 10
   while contador >= 0:
       print(contador)
       contador -= 1
   ```

2. **Soma de Números**
   - Escreva um programa que leia números até que o usuário digite 0 e exiba a soma dos números digitados.

   **Sugestão de código:**
   ```python
   soma = 0
   numero = None
   while numero != 0:
       numero = int(input("Digite um número (0 para sair): "))
       soma += numero
   print("A soma é:", soma)
   ```







