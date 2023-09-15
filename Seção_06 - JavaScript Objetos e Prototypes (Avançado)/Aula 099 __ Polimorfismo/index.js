/*
POLIMORFISMO

1. Definição:
   - O polimorfismo é um conceito de programação orientada a objetos que se relaciona com a capacidade de objetos de diferentes tipos responderem de forma única a chamadas de métodos com o mesmo nome.

2. Métodos com o Mesmo Nome:
   - O polimorfismo ocorre quando várias classes ou objetos têm métodos com o mesmo nome. Isso permite que diferentes objetos compartilhem um nome de método comum.

3. Herança Prototípica:
   - Em JavaScript, o polimorfismo é frequentemente implementado usando herança prototípica. Objetos herdam métodos e propriedades de seus protótipos, permitindo que métodos com o mesmo nome se comportem de maneira diferente para objetos de diferentes tipos.

4. Sobrescrita de Métodos:
   - Para alcançar o polimorfismo, você pode definir métodos com o mesmo nome em classes diferentes ou em protótipos de objetos diferentes. Esses métodos podem ser sobrescritos (ou seja, redefinidos) nas subclasses para fornecer comportamentos específicos daquela classe.

5. Chamadas Polimórficas:
   - O polimorfismo permite que você chame um método em um objeto sem se preocupar com o tipo específico desse objeto. JavaScript decidirá dinamicamente qual método executar com base no tipo real do objeto em tempo de execução.

6. Benefícios do Polimorfismo:
   - Reutilização de Código: Permite que você compartilhe um nome de método comum entre objetos de diferentes tipos, promovendo a reutilização de código.
   - Flexibilidade: Facilita a implementação de interfaces genéricas, onde diferentes objetos podem ser tratados de forma semelhante, independentemente de seu tipo real.

O polimorfismo é um conceito fundamental na programação orientada a objetos e é amplamente utilizado em JavaScript. Ele permite que você crie código mais flexível e reutilizável, onde objetos de diferentes tipos podem ser tratados de maneira uniforme, desde que respondam de forma apropriada a chamadas de métodos comuns.
*/


//Superclasse
function Conta(agencia, conta, saldo){
   this.agencia = agencia
   this.conta = conta
   this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
   if (this.saldo < valor){
      console.log('Saldo insuficiente')
      this.verSaldo()
      return
   }

   this.saldo -= valor
   console.log(`Sacado R$ ${valor}`)
   this.verSaldo()
}

Conta.prototype.depositar = function(valor){
   this.saldo += valor
   console.log(`Depositado R$ ${valor}`)
   this.verSaldo()
}

Conta.prototype.verSaldo = function(){
   console.log(`Ag/c ${this.agencia}/${this.conta} | Saldo: R$${this.saldo}`)
}

const conta = new Conta(176, 109827, 200)
conta.sacar(400)
conta.depositar(20)


//Abaixo utilizaremos a ContaCorrente como exemplo de substituição de método. Estou substituindo o método sacar do prototype por outro método semelhante porém alterado
function ContaCorrente(agencia, conta, saldo, limite){
   Conta.call(this, agencia, conta, saldo)
   this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){ //Copio o método e altero
   if ((this.saldo + this.limite) < valor){
      console.log('Saldo insuficiente')
      this.verSaldo()
      return
   }

   this.saldo -= valor
   console.log(`Sacado R$ ${valor}`)
   this.verSaldo()
}

const contaCorrente = new ContaCorrente(899, 913754, 100, 200)
contaCorrente.sacar(500)
contaCorrente.sacar(200)


//Abaixo temos a ContaPoupanca, verifique que a conta poupança apênas herda o prototype do pai, sem alterá-lo, comportando-se diferente de sua classe irmã ContaCorrente. A diferênça de execução de métodos em classes filhas de um mesmo pai é o chamado polimorfismo
function ContaPoupanca(agencia, conta, saldo){
   Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const contaPoupanca = new ContaPoupanca(123123, 1546745, 10)
contaPoupanca.sacar(20)