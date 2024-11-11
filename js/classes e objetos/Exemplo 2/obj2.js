class Cachorro{
    constructor(_nome,_idade,_raca)
    {
        this.nome=_nome;
        this.idade=_idade;
        this.raca=_raca;
    }
    latir(){
        console.log("AU AU!");
    }
    comer(racao)
    {
        console.log(`NHAM NHAM, que delicia a ${racao}`);
    }
}
const caramelo = new Cachorro("Toby",5,"Caramelo");
console.log(`O ${caramelo.nome} tem ${caramelo.idade}`);
caramelo.latir();
caramelo.comer("Bomguy");