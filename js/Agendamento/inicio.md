# Exemplo agendamento

Neste exemplo vamos ver uma interação entre Javascript e Banco de dados, no caso MySql.

Para isso precisamos:
  1. Instalar o Xampp (com apache e Mysql para rodar o PHPMyAdmin)
  2. Importar o script do banco.
  3. Instalar o pacote mysql2 no NPM para o Mysql interagir com Javascript

## Roteiro de Instalação do XAMPP e Importação de Script MySQL
### 1. Instalação do XAMPP

Acesse o site oficial do XAMPP: https://www.apachefriends.org/pt_br/index.html
Clique no botão de download para Windows
Execute o arquivo baixado (xampp-windows-x64-[versão].exe)
Siga os passos da instalação:


 - Clique em "Next"
Selecione os componentes (mantenha Apache e MySQL marcados)
Escolha o diretório de instalação (padrão: C:\xampp)
Clique em "Next" e depois em "Install"

### 2. Iniciando os Serviços

Abra o Painel de Controle do XAMPP:


- Execute o arquivo xampp-control.exe no diretório de instalação


Inicie os serviços necessários:


- Clique em "Start" para Apache
- Clique em "Start" para MySQL
>Verifique se as portas 80 (Apache) e 3306 (MySQL) estão livres

### 3. Acessando o MySQL Admin (phpMyAdmin)

Abra seu navegador web
Digite na barra de endereços: http://localhost/phpmyadmin
A interface do phpMyAdmin será exibida

## 2. Importando um Script SQL

No phpMyAdmin:


Clique em "Novo" para criar um novo banco de dados (se necessário)
Digite o nome do banco e clique em "Criar"


Para importar o script:


1. Selecione o banco de dados desejado no menu lateral
2. Clique na aba "Importar"
3. Clique em "Escolher arquivo"
4. Localize e selecione seu arquivo `db_mecanico.sql` na pasta sql nesse repositório.
5. Role até o final da página
6. Clique em "Executar"
> Em caso de erro na importação, verifique o tamanho máximo permitido do arquivo

### Verificação

Após a importação:
- Verifique se as tabelas foram criadas corretamente

## 3. Criação do projeto

1. Baixe os arquivos em uma pasta
2. Execute este comando
```Bash
npm init

## 4. Instalação do mysql2
Para instalar o pacote mysql2 via npm, você pode usar um dos seguintes comandos:

```Bash
# Instalação básica
npm install mysql2

# Ou para salvar como dependência no package.json
npm install mysql2 --save
```

Após a instalação, você pode verificar se foi instalado corretamente:

 - Verificando no arquivo package.json (deve aparecer nas dependências)
 - Olhando na pasta node_modules se existe a pasta mysql2
 - Rodando o comando npm list mysql2

Para usar o mysql2 no seu código, você precisará importá-lo assim:

```Javascript

// Usando require
const mysql = require('mysql2');

// Ou usando import (se estiver usando ES modules),esse metodo é o mais indicado
import mysql from 'mysql2';
```



