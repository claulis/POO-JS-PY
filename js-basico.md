# Resumo de JavaScript

## Tipos de dados

| **Seção**                    | **Descrição**                                                                                      |
|------------------------------|---------------------------------------------------------------------------------------------------|
| **Variáveis**                | São usadas para armazenar dados que podem ser utilizados posteriormente no código.               |
| **Tipos de Dados**           | JavaScript é dinamicamente tipado, o que significa que o tipo de uma variável é determinado automaticamente. Os principais tipos incluem: |
|                              | - **String:** Sequências de caracteres. Exemplo: `let nome = "Maria";`                           |
|                              | - **Number:** Valores numéricos, inteiros ou decimais. Exemplo: `let idade = 30;`               |
|                              | - **Boolean:** Representa verdadeiro (`true`) ou falso (`false`). Exemplo: `let ativo = true;`  |
|                              | - **Undefined:** Uma variável declarada mas não inicializada. Exemplo: `let x;`                  |
|                              | - **Null:** Indica a ausência intencional de valor. Exemplo: `let y = null;`                    |
|                              | - **Object:** Estruturas que contêm propriedades e métodos. Exemplo: `let pessoa = { nome: "João", idade: 25 };` |
|                              | - **Array:** Coleções de elementos indexados. Exemplo: `let frutas = ["maçã", "banana"];`       |

## Variáveis e constantes 

As diferenças entre `var`, `let` e `const` em JavaScript são fundamentais para entender como gerenciar variáveis na linguagem. Cada um desses identificadores possui características específicas que influenciam seu comportamento em termos de escopo, reatribuição e hoisting.

| **Característica**         | **`var`**                                         | **`let`**                                         | **`const`**                                      |
|----------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| **Escopo**                 | Escopo global ou de função.                       | Escopo de bloco (dentro de `{}` como em loops e condicionais). | Escopo de bloco (igual ao `let`).                |
| **Reatribuição**           | Pode ser reatribuída e redeclarada.              | Pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo. | Não pode ser reatribuída nem redeclarada.        |
| **Inicialização**          | Pode ser declarada sem inicialização (inicializa como `undefined`). | Pode ser declarada sem inicialização, mas não pode ser utilizada antes de sua declaração (ReferenceError). | Deve ser inicializada no momento da declaração.  |
| **Hoisting**               | Variáveis são içadas para o topo do escopo e inicializadas como `undefined`. | Variáveis são içadas, mas não inicializadas, resultando em ReferenceError se acessadas antes da declaração. | Também sofre hoisting, mas não pode ser acessada antes da declaração. |
| **Uso recomendado**        | Evitar em código moderno; geralmente usado em código legado. | Preferido para variáveis que podem mudar de valor. | Usado para valores constantes que não devem mudar. |

1. **Escopo:**
   - **`var`:** O escopo é global ou de função, o que significa que uma variável declarada com `var` é acessível em qualquer lugar dentro da função onde foi declarada ou globalmente se estiver fora de qualquer função.
   - **`let` e `const`:** Ambos têm escopo de bloco, limitando seu acesso apenas ao bloco onde foram definidos (por exemplo, dentro de um loop ou uma estrutura condicional).

2. **Reatribuição:**
   - **`var`:** Permite reatribuições e redeclarações, o que pode levar a confusões se o mesmo nome for usado em diferentes partes do código.
   - **`let`:** Permite reatribuições, mas não a redeclaração no mesmo escopo, ajudando a evitar conflitos.
   - **`const`:** Não permite reatribuições ou redeclarações, sendo ideal para valores que não devem mudar após a sua definição.

3. **Inicialização:**
   - **`var`:** Pode ser declarada sem um valor inicial e será automaticamente definida como `undefined`.
   - **`let`:** Também pode ser declarada sem um valor inicial, mas não deve ser usada antes de sua declaração.
   - **`const`:** Deve sempre ser inicializada na declaração; caso contrário, resultará em um erro.

4. **Hoisting:**
   - O hoisting é um comportamento onde as declarações de variáveis são elevadas ao topo do seu contexto de execução.
   - Para `var`, isso significa que você pode usar a variável antes da sua declaração no código, embora seu valor seja `undefined`.
   - Para `let` e `const`, as variáveis são içadas, mas não podem ser acessadas antes da declaração, resultando em um erro.

## Operadores =, == e ===

Os operadores `=`, `==` e `===` em JavaScript têm funções distintas e são frequentemente utilizados em diferentes contextos. 

### Operador de Atribuição: `=`
- **Descrição**: O operador `=` é utilizado para atribuir valores a variáveis. Por exemplo, em `x = 10`, o valor `10` é atribuído à variável `x`[2][4].
- **Exemplo**:
  ```javascript
  let x = 5; // Atribui 5 à variável x
  ```

### Igualdade Ampla: `==`
- **Descrição**: O operador `==` compara dois valores para verificar se são iguais, mas **não leva em consideração o tipo dos dados**. Isso significa que pode ocorrer uma conversão de tipo implícita (coerção) antes da comparação[1][3].
- **Exemplo**:
  ```javascript
  console.log(5 == '5'); // Retorna true, pois '5' é convertido para número
  ```

### Igualdade Estrita: `===`
- **Descrição**: O operador `===` compara tanto o valor quanto o tipo dos dados, ou seja, não realiza coerção de tipo. Para que a comparação retorne `true`, os valores devem ser exatamente iguais em tipo e valor[1][4].
- **Exemplo**:
  ```javascript
  console.log(5 === '5'); // Retorna false, pois os tipos são diferentes (number vs string)
  console.log(5 === 5);   // Retorna true, pois ambos são do mesmo tipo e valor
  ```

### Resumo das Diferenças

| Operador | Tipo de Comparação              | Coerção de Tipo | Exemplo                | Resultado   |
|----------|----------------------------------|------------------|------------------------|-------------|
| `=`      | Atribuição                      | N/A              | `x = 10`               | Atribui 10 a x |
| `==`     | Igualdade Ampla                 | Sim              | `5 == '5'`             | true        |
| `===`    | Igualdade Estrita               | Não              | `5 === '5'`            | false       |



## Estruturas de Controle
As estruturas de controle permitem a execução condicional ou repetitiva do código:
- **Condicionais:**
  - `if`: Executa um bloco se a condição for verdadeira.
    ```javascript
    if (idade >= 18) {
        console.log("Maior de idade");
    }
    ```
  - `else`: Executa um bloco se a condição do `if` for falsa.
    ```javascript
    else {
        console.log("Menor de idade");
    }
    ```
  - `switch`: Avalia uma expressão e executa um bloco correspondente ao valor.
    ```javascript
    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda");
            break;
        default:
            console.log("Outro dia");
    }
    ```
> :warning: Mesma Tipagem: Os valores nos cases *devem ser do mesmo tipo que a expressão do switch*. Por exemplo, se você estiver usando um switch com uma string, todos os cases também devem ser strings

## Estruturas de Repetição
As estruturas de repetição permitem executar um bloco de código várias vezes:
- **for:** Utilizado para repetir um bloco um número específico de vezes.
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```
- **while:** Executa um bloco enquanto a condição for verdadeira.
  ```javascript
  let i = 0;
  while (i < 5) {
      console.log(i);
      i++;
  }
  ```
- **do...while:** Semelhante ao `while`, mas garante que o bloco seja executado pelo menos uma vez.
  ```javascript
  let j = 0;
  do {
      console.log(j);
      j++;
  } while (j < 5);
  ```


