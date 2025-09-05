import { Conta } from "model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
   
   private listaContas: Array<Conta> = new Array<Conta>();
   numero: number = 0;
   
    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray (numero)

        if (buscarConta != null) {
            buscarConta.visualizar();
        } else
            console.log(colors.fg.red, '\n Conta numero: ' + numero
                + "não foi encontrada!", colors.reset);
    }

    listarTodas(): void {
    for (let Conta of this.listaContas){
        Conta.visualizar();
    }
    }

    cadastrar(conta: Conta): void {
       this.listaContas.push(conta);
       console.log(colors.fg.green, '\nA conta numero: ' + conta.numero + 
        "\nfoi criada com sucesso! ", colors.reset);   
    }


    atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero);

        if (buscarConta != null){
            this.listaContas [this.listaContas.indexOf(buscarConta)] = conta;
            console.log(colors.fg.green, '\n Conta numero: ' + conta.numero +
                ' foi atualizada com sucesso! ', colors.reset);
        } else
            console.log(colors.fg.red, 'n\ Conta numero: ' + conta.numero + 
                ' não foi encontrada! ', colors.reset)
    }


    deletar(numero: number): void {
      let buscaConta = this.buscarNoArray(numero);

      if (buscaConta != null) {
          this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
         console.log(colors.fg.green, "\nConta numero: " + numero + 
            " foi apagada com sucesso! ", colors.reset);
       } else {
       console.log(colors.fg.red, "\nConta numero: " + numero + 
        " não foi encontrada! ", colors.reset);
                                              }
    }


    sacar(numero: number, valor: number): void {
       let conta = this.buscarNoArray(numero);

        if (conta != null) {
          if (conta.sacar(valor) == true)
          console.log(colors.fg.green, "\nO Saque na Conta numero: " + numero + 
        " foi efetuado com sucesso! ", colors.reset);

        } else {
         console.log(colors.fg.red, "\nConta numero: " + numero + 
        " não foi encontrada! ", colors.reset);
       }
    }


    depositar(numero: number, valor: number): void {
             let conta = this.buscarNoArray(numero);

        if (conta != null) {
        conta.depositar(valor);
         console.log(colors.fg.green, "\nO Depósito na Conta numero: " + numero + 
           " foi efetuado com sucesso! ", colors.reset);
        } else {
         console.log(colors.fg.red, "\nConta numero: " + numero + 
            " não foi encontrada! ", colors.reset);
        }
    }  
    
     transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

       if (contaOrigem != null && contaDestino != null) {
          if (contaOrigem.sacar(valor) == true) {
            contaDestino.depositar(valor);
            console.log(colors.fg.green, "\nA Transferência da Conta numero: " + numeroOrigem + 
                " para a Conta numero: " + numeroDestino + " foi efetuada com sucesso! ", colors.reset);
    }
           } else {
           console.log(colors.fg.red, "\nA Conta numero: " + numeroOrigem + " e/ou a Conta numero: " 
            + numeroDestino + " não foram encontradas! ", colors.reset);
          }
    }

    //gerer numero da conta, metodo auxiliar
    public gerarNumero(): number {
        return ++ this.numero;
    }
    
    //chega se uma conta existe 
    public buscarNoArray (numero: number): Conta | null {

        for (let Conta of this.listaContas) {
            if (Conta.numero === numero)
                return Conta
             }
             return null
        }



}