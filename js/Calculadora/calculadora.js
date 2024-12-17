import {Menu} from './menu.js'

export class Calculadora extends Menu
{
  
    constructor(){
        super();
        super.Opcao();
        super.Numeros()
    }

    Operacao()
    {
      if(super.opcao==='1'){
        let resultado = super.num1+super.num2
        console.log(`${super.num1} + ${super.num1} = ${resultado}`)
      } else if (super.opcao==='2'){
        let resultado = super.num1-super.num2
        console.log(`${super.num1} - ${super.num1} = ${resultado}`)
      }else if (super.opcao==='3'){
        let resultado = super.num1*super.num2
        console.log(`${super.num1} * ${super.num1} = ${resultado}`)
      } else
      {
        if (super.num2 === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        let resultado = super.num1/super.num2
        console(`${super.num1} / ${super.num1} = ${resultado}`)
      }
    }
}