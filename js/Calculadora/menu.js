import promptSync from 'prompt-sync'; 
const prompt = promptSync(); 


export class Menu
{
    #num1;
    #num2;
    #opcao;

    constructor(){
        this.#num1
        this.#num2
        this.#opcao
    }

    get num1(){
       return this.#num1
    }
    get num2(){
        return this.#num2
    }
    get opcao(){
        return this.#opcao
    }

    Opcao() {
    console.log('Qual das operações quer executar: ');
    console.log('1: Soma');
    console.log('2: Subtração');
    console.log('3: Multipilcação ');
    console.log('4: Divição: ');
    this.#opcao = prompt('Digite a opção: ')
    }

    Numeros()
    {
        console.log('Agora digite dois numeros:');
        this.#num1  = parseFloat(prompt('Numero 1: '));
        this.#num2  = parseFloat(prompt('Numero 1: '));
    }

    RetornaValores()
    {
        console.log(`${this.#opcao} ${this.#num1} ${this.#num2}`)
    }
}




