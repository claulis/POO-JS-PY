# Explicação estrutura classe Pessoa.py

---

```python
# Definindo a classe Pessoa
class Pessoa:
    # Método construtor para inicializar atributos da classe
    def __init__(self, nome, idade):
        # Atributo 'nome' é atribuído ao objeto atual
        self.nome = nome
        # Atributo 'idade' é atribuído ao objeto atual
        self.idade = idade

    # Método para exibir uma mensagem com informações da pessoa
    def DizerOla(self):
        # Exibe uma mensagem com o nome e idade do objeto
        print(f"Olá, meu nome é {self.nome} e tenho {self.idade} anos.")
    

# Criando um objeto da classe Pessoa com os dados "Claudio" e 45 anos
pessoa1 = Pessoa("Claudio", 45)
# Chamando o método DizerOla para exibir a mensagem no console
pessoa1.DizerOla()
```

---

## Explicação Detalhada

1. **`class Pessoa:`**
   - Define uma nova classe chamada `Pessoa`. A classe representa um modelo ou estrutura para criar objetos relacionados ao conceito de uma pessoa.
   - **Classe como "molde"**: Ela contém atributos e métodos que os objetos da classe irão compartilhar.

---

2. **`def __init__(self, nome, idade):`**
   - É o método especial chamado `__init__`. Ele é o **construtor da classe** e é executado automaticamente quando você cria uma nova instância da classe.
   - **Parâmetros**: Recebe os parâmetros `nome` e `idade` passados ao criar um objeto.
   - **`self`**: Representa a instância atual da classe. Ele é usado para referenciar atributos e métodos do próprio objeto.

---

3. **`self.nome = nome`**
   - Define o atributo `nome` para o objeto atual com o valor passado no parâmetro `nome`.
   - Exemplo: Se `nome="Claudio"`, o atributo `self.nome` será armazenado como `"Claudio"` no objeto.

---

4. **`self.idade = idade`**
   - Define o atributo `idade` para o objeto atual com o valor do parâmetro `idade`.
   - Exemplo: Se `idade=45`, o atributo `self.idade` será armazenado como `45` no objeto.

---

5. **`def DizerOla(self):`**
   - É um método da classe `Pessoa`. Métodos são funções que pertencem a uma classe e geralmente manipulam ou interagem com atributos da classe.
   - **`self`**: Garante que o método trabalha no contexto do objeto que chamou a função.

---

6. **`print(f"Olá, meu nome é {self.nome} e tenho {self.idade} anos.")`**
   - Exibe uma mensagem no console com o nome e a idade da instância.
   - **`f"string"` (f-string)**: É uma forma de formatar strings no Python. Aqui, `self.nome` e `self.idade` são substituídos pelos valores correspondentes do objeto.

---

7. **`pessoa1 = Pessoa("Claudio", 45)`**
   - Cria uma instância (objeto) da classe `Pessoa`.
   - **Parâmetros passados**: `"Claudio"` é atribuído ao atributo `nome`, e `45` é atribuído ao atributo `idade`.
   - **O objeto `pessoa1` agora representa um exemplo da classe `Pessoa`.**

---

8. **`pessoa1.DizerOla()`**
   - Chama o método `DizerOla` do objeto `pessoa1`.
   - **Resultado esperado**: Exibirá a mensagem `Olá, meu nome é Claudio e tenho 45 anos.` no console.

---

## Saída Esperada no Console:
Após a execução do código, você verá a seguinte mensagem no terminal:

```
Olá, meu nome é Claudio e tenho 45 anos.
```

---

