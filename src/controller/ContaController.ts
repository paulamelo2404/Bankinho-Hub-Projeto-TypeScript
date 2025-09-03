import { Conta } from "model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
   
   private listaContas: Array<Conta> = new Array<Conta>();
   numero: number = 0;
   
    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodas(): void {
    for (let Conta of this.listaContas){
        Conta.visualizar();
    }
    }
    cadastrar(conta: Conta): void {
       this.listaContas.push(conta);
       console.log(colors.fg.green, '\nA conta numero: ' + conta.numero +
                    "foi criada com sucesso", colors.reset);
       
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //gerer numero da conta, metodo auxiliar
    public gerarNumero(): number {
        return ++ this.numero;
    }
    
}