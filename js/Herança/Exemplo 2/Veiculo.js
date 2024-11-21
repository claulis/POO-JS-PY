class Veiculo
{
    constructor(_marca,_modelo,_velocidade=0)
    {
        this.marca=_marca;
        this.modelo=_modelo;
        this.velocidade=_velocidade;
    }
    acelera()
    {
       return this.velocidade += 10;
    }
    freia()
    {
       return this.velocidade -=10;
    }
}

class Carro extends Veiculo
{
    constructor(_marca,_modelo,_combustivel="flex")
    {
        super(_marca,_modelo);
        this.comustivel=_combustivel;

    }
    viraEsquerda(){
        return "esquerda";
    }
    viraDireita()
    {
        return "direita";
    }
}
class Moto extends Carro{
    constructor(_marca,_modelo,_combustivel="gasolina")
    {
        super(_marca,_modelo)
        this.combustivel=_combustivel;
    }
    empina()
    {
        return "Empinando";
    }
}

const moto1 = new Moto("Ducati","Diavel");
console.log(`Velocidade: ${moto1.acelera()}`);
console.log(`Velocidade: ${moto1.freia()}`);

console.log(`Manobra: ${moto1.empina()}`);
console.log(`Manobra: ${moto1.viraDireita()}`);
console.log(`Manobra: ${moto1.viraEsquerda()}`);
