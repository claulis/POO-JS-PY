class Pessoa:
    def __init__(self,nome,idade):
        self.nome = nome
        self.idade=idade

    def DizerOla(self):
        print(f"Olá, meu nome é {self.nome} e tenho {self.idade} anos.")
    

pessoa1 = Pessoa("Claudio",45)
pessoa1.DizerOla()
        