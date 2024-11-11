class Retangulo{
    constructor(_base, _altura)
    {
        this.base=_base;
        this.altura=_altura;
    }
    calculaPerimetro()
    {
        return this.base*2+this.altura*2;
    }
    calculaArea()
    {
        return this.base*this.altura;
    }
}
const retangulo1 = new Retangulo(10.0,3.5);
const retangulo2= new Retangulo(8.0,2.0);

const diffPerimetro = retangulo1.calculaPerimetro() - retangulo2.calculaPerimetro();
console.log(`A diferença dos perimetro é ${diffPerimetro}`);
const diffArea = retangulo1.calculaArea() - retangulo2.calculaArea();
console.log(`A diferença das áreas é ${diffArea}`);