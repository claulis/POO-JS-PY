# Resumo de JavaScript

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

As diferenças entre `var`, `let` e `const` em JavaScript são fundamentais para entender como gerenciar variáveis na linguagem. Cada um desses identificadores possui características específicas que influenciam seu comportamento em termos de escopo, reatribuição e hoisting. Aqui estão as principais distinções:

## Diferenças entre `var`, `let` e `const`

| **Característica**         | **`var`**                                         | **`let`**                                         | **`const`**                                      |
|----------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| **Escopo**                 | Escopo global ou de função.                       | Escopo de bloco (dentro de `{}` como em loops e condicionais). | Escopo de bloco (igual ao `let`).                |
| **Reatribuição**           | Pode ser reatribuída e redeclarada.              | Pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo. | Não pode ser reatribuída nem redeclarada.        |
| **Inicialização**          | Pode ser declarada sem inicialização (inicializa como `undefined`). | Pode ser declarada sem inicialização, mas não pode ser utilizada antes de sua declaração (ReferenceError). | Deve ser inicializada no momento da declaração.  |
| **Hoisting**               | Variáveis são içadas para o topo do escopo e inicializadas como `undefined`. | Variáveis são içadas, mas não inicializadas, resultando em ReferenceError se acessadas antes da declaração. | Também sofre hoisting, mas não pode ser acessada antes da declaração. |
| **Uso recomendado**        | Evitar em código moderno; geralmente usado em código legado. | Preferido para variáveis que podem mudar de valor. | Usado para valores constantes que não devem mudar. |

### Explicação dos Conceitos

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


### Estruturas de Controle
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

### Estruturas de Repetição
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


