/**
 * Classe para gerenciamento de Agendamentos
 * Utiliza a classe Banco para operações no MySQL
 */

import banco from './Banco.js';

export default class Agendamento {
    // Propriedades privadas da classe
    #codigo;
    #dataHora;
    #listaServicos;
    #listaMecanicos;
    #carro;
   

    /**
     * Construtor da classe
     * Inicializa um objeto banco e as propriedades privadas
     */
    constructor() {
        this.banco = new banco();
        this.#carro = null;
        this.#dataHora = null;
        this.#codigo = null;
        this.#listaMecanicos = null;
        this.#listaServicos = null;
       
    }
  // Getters e Setters
    /**
     * @returns {number} Código do agendamento
     */
    get codigo() { return this.#codigo; }
    /**
     * @param {number} _codigo
     */
    set codigo(_codigo) { this.#codigo = _codigo; }

    /**
     * @returns {Date} Data e hora do agendamento
     */
    get dataHora() { return this.#dataHora; }
    /**
     * @param {Date} _dataHora
     */
    set dataHora(_dataHora) { this.#dataHora = _dataHora; }

    /**
     * @returns {string} Dados do carro
     */
    get carro() { return this.#carro; }
    /**
     * @param {string} _carro
     */
    set carro(_carro) { this.#carro = _carro; }

    /**
     * @returns {Array} Lista de mecânicos
     */
    get listaMecanicos() { return this.#listaMecanicos; }
    /**
     * @param {Array} _listaMecanicos
     */
    set listaMecanicos(_listaMecanicos) { this.#listaMecanicos = _listaMecanicos; }

    /**
     * @returns {Array} Lista de serviços
     */
    get listaServicos() { return this.#listaServicos; }
    /**
     * @param {Array} _listaServicos
     */
    set listaServicos(_listaServicos) { this.#listaServicos = _listaServicos; }

   
    /**
     * Salva um novo agendamento no banco de dados
     * @async
     * @returns {Promise<void>}
     * @throws {Error} Erro ao salvar agendamento
     */
    async SalvarAgendamento() {
        try {
            await this.banco.conectar();
    
            const dataFormatada = new Date(this.#dataHora)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ');
    
            const mecanicosString = this.#listaMecanicos.join(', ');
            const servicosString = this.#listaServicos.join(', ');
    
            // Log dos valores
            console.log('Valores a serem inseridos:');
            console.log('Data/Hora:', dataFormatada);
            console.log('Mecânicos:', mecanicosString);
            console.log('Placa:', this.#carro);
            console.log('Serviços:', servicosString);
    
            const [result] = await this.banco.connection.execute(
                'INSERT INTO t_agendamento (datahora, mecanicos, placa, servicos) VALUES (?, ?, ?, ?)',
                [
                    dataFormatada,
                    mecanicosString,
                    this.#carro,
                    servicosString
                ]
            );
    
            this.#codigo = result.insertId;
            await this.banco.fecharConexao();
            return this.#codigo;
        } catch (error) {
            console.error("Erro ao salvar agendamento:", error);
            throw error;
        }
    }

    /**
     * Lista todos os agendamentos
     * @async
     * @param {Date} [data] Data opcional para filtrar agendamentos
     * @returns {Promise<Array>} Lista de agendamentos
     */
    async ListarAgendamento(data = null) {
        try {
            await this.banco.conectar();
            
            let query = 'SELECT * FROM t_agendamento';
            const [rows] = await this.banco.connection.execute(query);
            await this.banco.fecharConexao();
            return rows;
        } catch (error) {
            console.error("Erro ao listar agendamentos:", error);
            throw error;
        }
    }

    /**
     * Cancela um agendamento específico
     * @async
     * @param {number} codigo Código do agendamento
     * @returns {Promise<boolean>} True se cancelado com sucesso
     */
    async CancelarAgendamento(codigo) {
        try {
            await this.banco.conectar();
            const [result] = await this.banco.connection.execute(
                'DELETE FROM t_agendamento  WHERE codigo = ?',
                [codigo]
            );

            await this.banco.fecharConexao();

            if (result.affectedRows > 0) {
                console.log(`Agendamento ${codigo} cancelado com sucesso`);
                return true;
            } else {
                console.log(`Agendamento ${codigo} não encontrado`);
                return false;
            }
        } catch (error) {
            console.error("Erro ao cancelar agendamento:", error);
            throw error;
        }
    }

    /**
     * Busca um agendamento específico pelo código
     * @async
     * @param {number} codigo Código do agendamento
     * @returns {Promise<Object|null>} Dados do agendamento ou null se não encontrado
     */
  
}

