class Livro:
    #construtor da classe
    def __init__(self):
        self.__titulo = None
        self.__ano_publicacao=0
        self.__autor = None
        self.__isbn = None
        self.__quantidade = 0

    #get titulo
    @property
    def titulo(self):
        return self.__titulo    
    #set titulo
    @titulo.setter
    def titulo(self,novo_titulo):
        self.__titulo = novo_titulo

    @property
    def ano_publicacao(self):
        return self.__ano_publicacao    
    @ano_publicacao.setter
    def ano_publicacao(self,ano):
        self.__ano_publicacao=ano
    
    @property
    def autor(self):
        return self.__autor
    @autor.setter
    def autor(self,novo_autor):
        self.__autor = novo_autor
    
    @property
    def isbn(self):
        return self.__isbn    
    @isbn.setter
    def isbn(self,novo_isbn):
        self.__isbn = novo_isbn
    
    @property
    def quantidade(self):
       return self.__quantidade
    
    @quantidade.setter
    def quantidade (self,nova_quantidade):
        self.__quantidade = nova_quantidade

    def emprestar(self, usuario):
        if self.__quantidade>0:
            self.__quantidade-=1
            print(f"Livro {self.__titulo} de {self.__autor} emprestado para {usuario}")
            self.disponibilidade()
        else:
            print("Livro indisponível")
    
    def devoluir(self,usuario):
         self.__quantidade+=1
         print(f"Livro {self.__titulo} de {self.__autor} devoluido por {usuario}")
         self.disponibilidade()

    def disponibilidade(self):
        print(f"Livro {self.__titulo} de {self.__autor} ano {self.__ano_publicacao} em quantidade de: {self.__quantidade}")

livro1 = Livro()
livro1.titulo="Sherlock Holmes"
livro1.autor="Arthur Conan Doyle"
livro1.quantidade=3
livro1.emprestar("Claudio")
livro1.emprestar("Nicolas")
livro1.emprestar("Debora")
livro1.emprestar("Claudio")

