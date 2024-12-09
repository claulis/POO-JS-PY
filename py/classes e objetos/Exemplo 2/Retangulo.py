class Retangulo:
    
    def __init__(self,altura,base):
        self.Altura = altura
        self.Base = base

   
    def CalculaPerimetro(self):
        return (2*self.Altura)+(2*self.Base)
    def CalculaArea(self):
        return (self.Altura*self.Base)
    
base = float(input("Digite o valor da base "))
altura=float(input("Digite a altura "))
retangulo1 = Retangulo(altura,base)
print(retangulo1.CalculaPerimetro())
print(retangulo1.CalculaArea())
        