/*
nome1="Nicolas";
nome2 = "Debora";
nome3 = "Claudio";
idade1=16;
idade2=16;
idade3 =30;
profissao1= "Estudante";
profissao2="Estudante";
Prifssao3="professor"
console.log(`Olá eu sou ${nome1} e tenho ${idade1}`);
console.log(`Olá eu sou ${nome2} e tenho ${idade2}`);
console.log(`Olá eu sou ${nome3} e tenho ${idade3}`);
*/
class Professor
{
    constructor(_nome, _idade,_salario)
    {   //atributos ou propriedades
        this.nome = _nome;
        this.idade = _idade;
        this.salario = _salario;
    }
}

class Estudante{
    constructor(_nome,_idade,_matricula)
    {
        this.nome = _nome;
        this.idade = _idade;
        this.matricula = _matricula
    }
}

const nicolas= new Estudante("Nicolas",16,"123456");
const debora = new Estudante("Debora",16,"98765");
const claudio = new Professor("Claudio",30,2500.1);

console.log(`Olá eu sou ${nicolas.nome} e tenho ${nicolas.idade}`);
console.log(`Olá sou ${debora.nome} e minha matrícula é ${debora.matricula}`);






