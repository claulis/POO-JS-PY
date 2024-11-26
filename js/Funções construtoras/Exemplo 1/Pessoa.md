Este código utiliza uma **função construtora** em JavaScript para criar objetos e encapsular as propriedades privadas (`nome` e `idade`) usando o conceito de **closures**.



### Como o Código Funciona

1. **Encapsulamento com Closures**:
   - As variáveis `nome` e `idade` são declaradas dentro da função construtora `Pessoa`.
   - Como essas variáveis não são adicionadas ao objeto (`this`), elas permanecem inacessíveis fora da função.
   - Os métodos `setNome`, `getNome`, `setIdade` e `getIdade` têm acesso a essas variáveis por causa do **closure**.

2. **Definição de Métodos Públicos**:
   - Os métodos criados no objeto (`this.setNome`, etc.) permitem que o código externo manipule as variáveis privadas indiretamente.

3. **Propriedades Privadas**:
   - `nome` e `idade` não podem ser acessados diretamente, garantindo que esses dados só possam ser manipulados por meio dos métodos definidos.

---

### Testando o Código

```javascript
const pessoa1 = new Pessoa();
pessoa1.setNome("Ana"); // Define o nome
pessoa1.setIdade(25);   // Define a idade

console.log(pessoa1.getNome()); // "Ana"
console.log(pessoa1.getIdade()); // 25

// Tentando acessar diretamente as propriedades privadas
console.log(pessoa1.nome); // undefined
console.log(pessoa1.idade); // undefined
```

---

### Vantagens do Encapsulamento

- **Propriedades Privadas**: As variáveis `nome` e `idade` estão "escondidas" e protegidas contra modificações diretas.
- **Interface Controlada**: O acesso a essas propriedades é feito somente por meio dos métodos públicos, permitindo maior controle sobre a lógica de validação ou manipulação.

