class ContaBancaria:
    def __init__(self):
        self.__titular = None
        self.__saldo = 0

    @property
    def titular(self):
          return self.__titular
      
    @titular.setter
    def titular(self,novo_titular):
        self.__titular=novo_titular

    @property
    def saldo(self):
     return self.__saldo
       
    @saldo.setter
    def saldo(self,novo_saldo):
       self.__saldo=novo_saldo

    def exibir_dados_conta(self):
        print(f"Titular:{self.__titular}, Saldo:{self.__saldo}")
    
    def depositar(self,dinheiro):
        self.__saldo+=dinheiro

    def sacar(self,dinheiro):
        if self.__saldo>0:
           self.__saldo-=dinheiro
        else:
            print("saldo insuficiente")
   

conta=ContaBancaria()
conta.titular="Debora"
conta.saldo=20
conta.exibir_dados_conta()
conta.depositar(20)
conta.exibir_dados_conta()
conta.sacar(40)
conta.exibir_dados_conta()
conta.sacar(40)
conta.exibir_dados_conta()
conta.titular="Claudio"
conta.saldo=1000
conta.exibir_dados_conta()