/**
 * Classe para gerenciamento de conexão com banco de dados MySQL
 * Utiliza o pacote mysql2/promise para operações assíncronas
 */

import mysql from 'mysql2/promise.js';

export default class Banco {
    /**
     * Construtor da classe
     * Inicializa a propriedade connection como null
     */
    constructor() {
        this.connection = null;
    }

    /**
     * Estabelece conexão com o banco de dados MySQL
     * @async
     * @returns {Promise<void>}
     * @throws {Error} Erro ao conectar com o banco
     */
    async conectar() {
        try {
            // Configurações de conexão com o banco
            this.connection = await mysql.createConnection({
                host: "localhost",     // Endereço do servidor
                user: "root",         // Usuário do banco
                port: "3306",        // Porta padrão MySQL
                database: "db_mecanico" // Nome do banco de dados
            });
            console.log("Banco conectado com sucesso");
        } catch (err) {
            console.error("Erro ao conectar com o banco:", err);
        }
    }

    /**
     * Fecha a conexão com o banco de dados
     * @async
     * @returns {Promise<void>}
     * @throws {Error} Erro ao fechar conexão
     */
    async fecharConexao() {
        try {
            // Verifica se existe uma conexão ativa antes de tentar fechar
            if (this.connection) {
                await this.connection.end();
                console.log("Banco desconectado com sucesso");
            }
        } catch (err) {
            console.error("Erro ao fechar conexão:", err);
        }
    }

    /**
     * Verifica se a conexão está ativa
     * @returns {boolean}
     */
    isConnected() {
        return this.connection !== null;
    }
}
