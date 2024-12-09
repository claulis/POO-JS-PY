# Explicação Contabancaria.py

---

```python
# Definição da classe ContaBancaria
class ContaBancaria:
    
    # Método construtor para inicializar atributos privados
    def __init__(self):
        # Atributo privado para armazenar o nome do titular da conta
        self.__titular = None
        # Atributo privado para armazenar o saldo da conta
        self.__saldo = 0

    # Propriedade para acessar e modificar o titular da conta de forma controlada
    @property
    def titular(self):
        # Retorna o nome do titular
        return self.__titular
      
    # Método setter para atualizar o nome do titular
    @titular.setter
    def titular(self, novo_titular):
        self.__titular = novo_titular

    # Propriedade para acessar o saldo da conta
    @property
    def saldo(self):
        # Retorna o saldo atual da conta
        return self.__saldo
       
    # Método setter para atualizar o saldo da conta
    @saldo.setter
    def saldo(self, novo_saldo):
        self.__saldo = novo_saldo

    # Método para exibir os dados da conta
    def exibir_dados_conta(self):
        # Exibe o nome do titular e o saldo atual da conta
        print(f"Titular:{self.__titular}, Saldo:{self.__saldo}")
    
    # Método para depositar dinheiro na conta
    def depositar(self, dinheiro):
        # Adiciona o valor do depósito ao saldo da conta
        self.__saldo += dinheiro

    # Método para sacar dinheiro da conta
    def sacar(self, dinheiro):
        # Verifica se o saldo é suficiente para realizar o saque
        if self.__saldo > 0:
            # Subtrai o valor do saque do saldo da conta
            self.__saldo -= dinheiro
        else:
            # Caso contrário, exibe uma mensagem de saldo insuficiente
            print("saldo insuficiente")
   
# Criação de um objeto da classe ContaBancaria
conta = ContaBancaria()

# Configurando o nome do titular da conta
conta.titular = "Debora"
# Configurando o saldo inicial da conta
conta.saldo = 20
# Exibindo os dados da conta
conta.exibir_dados_conta()

# Depositando mais 20 unidades na conta
conta.depositar(20)
# Exibindo os dados da conta após o depósito
conta.exibir_dados_conta()

# Tentando sacar 40 unidades da conta
conta.sacar(40)
# Exibindo os dados da conta após a tentativa de saque
conta.exibir_dados_conta()

# Tentando sacar mais 40 unidades novamente
conta.sacar(40)
# Exibindo os dados da conta após a tentativa de saque
conta.exibir_dados_conta()

# Alterando o nome do titular da conta
conta.titular = "Claudio"
# Configurando um novo saldo na conta
conta.saldo = 1000
# Exibindo os dados da conta após as alterações
conta.exibir_dados_conta()
```

---

## Explicação Detalhada do Código

### 1. **Definição da Classe `ContaBancaria`**

```python
class ContaBancaria:
```

- Define uma classe chamada `ContaBancaria`.
- Representa uma abstração de uma conta bancária com atributos como **titular** e **saldo**, e métodos relacionados ao funcionamento básico da conta.

---

### 2. **Método Construtor `__init__`**

```python
def __init__(self):
    self.__titular = None
    self.__saldo = 0
```

- **`self.__titular`**: Um atributo privado para armazenar o nome do titular da conta.
- **`self.__saldo`**: Um atributo privado para armazenar o saldo da conta.
- **`Privacidade com '__'`**: O uso de dois underscores torna esses atributos privados. Isso significa que só podem ser acessados/modificados por meio dos métodos ou propriedades da classe.

---

### 3. **Propriedades para Controle de Acesso**

#### a. **Propriedade `titular`**

```python
@property
def titular(self):
    return self.__titular

@titular.setter
def titular(self, novo_titular):
    self.__titular = novo_titular
```

- **`@property`**: Permite acessar o atributo privado de forma controlada.
- **`@titular.setter`**: Permite alterar o atributo privado de maneira controlada.
- Evita que o acesso seja feito diretamente ao atributo privado.

---

#### b. **Propriedade `saldo`**

```python
@property
def saldo(self):
    return self.__saldo

@saldo.setter
def saldo(self, novo_saldo):
    self.__saldo = novo_saldo
```

- **Mesma lógica da propriedade `titular`.** Aqui, é controlado o acesso e a modificação do atributo `saldo`.

---

### 4. **Método para Exibir Dados da Conta**

```python
def exibir_dados_conta(self):
    print(f"Titular:{self.__titular}, Saldo:{self.__saldo}")
```

- Exibe no console o nome do titular e o saldo da conta.

---

### 5. **Método para Depositar Dinheiro**

```python
def depositar(self, dinheiro):
    self.__saldo += dinheiro
```

- Adiciona o valor especificado ao saldo da conta.

---

### 6. **Método para Sacar Dinheiro**

```python
def sacar(self, dinheiro):
    if self.__saldo > 0:
        self.__saldo -= dinheiro
    else:
        print("saldo insuficiente")
```

- **Verificação:** Antes de realizar o saque, verifica se o saldo é suficiente.
- **Caso negativo:** Se o saldo for insuficiente, uma mensagem é exibida.

---

### 7. **Criação da Conta e Execução dos Métodos**

```python
conta = ContaBancaria()
conta.titular = "Debora"
conta.saldo = 20
conta.exibir_dados_conta()
conta.depositar(20)
conta.exibir_dados_conta()
conta.sacar(40)
conta.exibir_dados_conta()
conta.sacar(40)
conta.exibir_dados_conta()
conta.titular = "Claudio"
conta.saldo = 1000
conta.exibir_dados_conta()
```

1. **`conta.titular = "Debora"`**: Configura o nome do titular da conta como "Debora".
2. **`conta.saldo = 20`**: Configura o saldo inicial como 20.
3. **`conta.exibir_dados_conta()`**: Exibe os dados da conta.
4. **Depósito e saque subsequentes**:
   - Realiza operações de depósito e saque.
   - Tenta sacar um valor maior que o saldo para demonstrar o tratamento de erros.
5. **Atualiza titular e saldo**:
   - Muda o nome do titular para "Claudio" e redefine o saldo para 1000.

---

