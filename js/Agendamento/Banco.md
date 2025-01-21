Classe Banco
Esta classe em JavaScript foi criada para gerenciar a conexão com um banco de dados MySQL utilizando o pacote mysql2/promise. Ela fornece métodos assíncronos para conectar e desconectar do banco de dados.

Código
import mysql from 'mysql2/promise.js';

export default class Banco {
    constructor() {
        this.connection = null;
    }

    // Método para conectar ao banco de dados
    async conectar() {
        try {
            this.connection = await mysql.createConnection({
                host: "localhost",
                user: "root",
                port: "3306",
                database: "db_mecanico"
            });
            console.log("Banco conectado com sucesso");
        } catch (err) {
            console.error(err);
        }
    }

    // Método para desconectar do banco de dados
    async fecharConexao() {
        try {
            await this.connection.end();
            console.log("Banco desconectado com sucesso");
        } catch (err) {
            console.error(err);
        }
    }
}


Métodos
conectar()
Este método cria uma conexão com o banco de dados utilizando as seguintes configurações:

host: localhost
user: root
port: 3306
database: db_mecanico

O método é assíncrono e inclui tratamento básico de erros.

fecharConexao()
Este método encerra a conexão previamente estabelecida com o banco de dados. Ele também é assíncrono e possui tratamento de erros.

Melhorias Sugeridas

Autenticação com senha: Adicionar um campo para a senha do banco de dados para maior segurança.
Pool de Conexões: Substituir a conexão simples por um pool de conexões para otimizar a performance em aplicações de produção.
Mecanismo de Reconexão: Implementar um sistema que reestabeleça a conexão automaticamente em caso de falha.
Novos métodos: Criar métodos para executar queries diretamente (e.g., insert, select, update, etc.).
Validações: Adicionar verificações para campos obrigatórios (host, user, database, etc.).


Uso
Você pode importar e utilizar a classe Banco em outro arquivo da seguinte forma:
import Banco from './Banco.js';

const banco = new Banco();

(async () =&gt; {
    await banco.conectar();
    // Realizar operações com o banco de dados aqui...
    await banco.fecharConexao();
})();

Certifique-se de que o banco de dados MySQL esteja rodando, e que os parâmetros de conexão (host, user, port, database) estejam corretos!

Este método cria uma conexão com o banco de dados utilizando as seguintes configurações:

host: localhost
user: root
port: 3306
database: db_mecanico

O método é assíncrono e inclui tratamento básico de erros.

fecharConexao()

Este método encerra a conexão previamente estabelecida com o banco de dados. Ele também é assíncrono e possui tratamento de erros.

Melhorias Sugeridas
Autenticação com senha: Adicionar um campo para a senha do banco de dados para maior segurança.
Pool de Conexões: Substituir a conexão simples por um pool de conexões para otimizar a performance em aplicações de produção.
Mecanismo de Reconexão: Implementar um sistema que reestabeleça a conexão automaticamente em caso de falha.
Novos métodos: Criar métodos para executar queries diretamente (e.g., insert, select, update, etc.).
Validações: Adicionar verificações para campos obrigatórios (host, user, database, etc.).
Uso

Você pode importar e utilizar a classe Banco em outro arquivo da seguinte forma:

Javascript
Copiar
import Banco from './Banco.js';

const banco = new Banco();

(async () => {
    await banco.conectar();
    // Realizar operações com o banco de dados aqui...
    await banco.fecharConexao();
})();


Certifique-se de que o banco de dados MySQL esteja rodando, e que os parâmetros de conexão (host, user, port, database) estejam corretos!