// menu.js
import readline from 'readline';
import Agendamento from './Agendamento.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const agendamento = new Agendamento();

function exibirMenu() {
    console.clear();
    console.log('=== SISTEMA DE AGENDAMENTO ===');
    console.log('1. Criar novo agendamento');
    console.log('2. Listar agendamentos');
    console.log('3. Cancelar agendamento');
    console.log('0. Sair');
    console.log('============================');
}

function pergunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, resolve);
    });
}

async function criarAgendamento() {
    try {
        console.log('\n=== NOVO AGENDAMENTO ===');
        
        // Coleta data e hora
        const dataStr = await pergunta('Data (DD/MM/AAAA): ');
        const horaStr = await pergunta('Hora (hh:mm): ');
        const [dia, mes, ano] = dataStr.split('/');
        const [hora, minutos] = horaStr.split(':');
        const dataHora = new Date(ano, mes-1, dia, hora,minutos).getTime();

        
        // Coleta demais informações
        const placa = await pergunta('Placa do carro: ');
        const mecanicos = await pergunta('Mecânicos (separados por vírgula): ');
        const servicos = await pergunta('Serviços (separados por vírgula): ');

        // Configura o agendamento
        agendamento.dataHora = dataHora;
        agendamento.carro = placa;
        agendamento.listaMecanicos = mecanicos.split(',').map(m => m.trim());
        agendamento.listaServicos = servicos.split(',').map(s => s.trim());

        // Salva o agendamento
        const codigo = await agendamento.SalvarAgendamento();
        console.log(`\nAgendamento criado com sucesso! Código: ${codigo}`);

    } catch (error) {
        console.error('\nErro ao criar agendamento:', error.message);
    }
    
    await pergunta('\nPressione ENTER para continuar...');
}

async function listarAgendamentos() {
    try {
        console.log('\n=== LISTAR AGENDAMENTOS ===');
       
        let agendamentos;        
        agendamentos = await agendamento.ListarAgendamento();
        

        if (agendamentos.length === 0) {
            console.log('\nNenhum agendamento encontrado!');
        } else {
            console.log('\nAgendamentos encontrados:');
            agendamentos.forEach(ag => {
                console.log(`\nCódigo: ${ag.codigo}`);
                console.log(`Data/Hora: ${new Date(ag.datahora).toLocaleString()}`);
                console.log(`Carro: ${ag.placa}`);
                console.log(`Mecânicos: ${ag.mecanicos}`);
                console.log(`Serviços: ${ag.servicos}`);               
                console.log('------------------------');
            });
        }

    } catch (error) {
        console.error('\nErro ao listar agendamentos:', error.message);
    }
    
    await pergunta('\nPressione ENTER para continuar...');
}

async function cancelarAgendamento() {
    try {
        console.log('\n=== CANCELAR AGENDAMENTO ===');
        const codigo = await pergunta('Digite o código do agendamento: ');
        
        const cancelado = await agendamento.CancelarAgendamento(parseInt(codigo));
        if (cancelado) {
            console.log('\nAgendamento cancelado com sucesso!');
        } else {
            console.log('\nNão foi possível cancelar o agendamento.');
        }

    } catch (error) {
        console.error('\nErro ao cancelar agendamento:', error.message);
    }
    
    await pergunta('\nPressione ENTER para continuar...');
}


async function main() {
    while (true) {
        exibirMenu();
        const opcao = await pergunta('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await criarAgendamento();
                break;
            case '2':
                await listarAgendamentos();
                break;            
            case '3':
                await cancelarAgendamento();
                break;            
            case '0':
                console.log('\nSaindo...');
                rl.close();
                return;
            default:
                console.log('\nOpção inválida!');
                await pergunta('\nPressione ENTER para continuar...');
        }
    }
}

// Inicia o programa
main().catch(console.error);