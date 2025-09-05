import { Conta } from 'model/Conta';
import * as readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main () {

    //instancia da classe Contacontroller
    let Contas: ContaController = new ContaController();

    //variaveis auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente','Conta Poupanca']; 

    //let opcao: number;
    
   // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true) {
         
        
        console.log(colors.bg.black, colors.fg.yellow,) 
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                   Bankinho Hub                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        
        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBankinho Hub - Aqui seu dinheiro descansa traquilo!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                  console.log("Digite o Número da agência: ");
                 agencia = readlineSync.questionInt("");
    
                console.log("Digite o Nome do Titular da conta: ");
                titular = readlineSync.question("");
    
                console.log("\nDigite o tipo da Conta: ");
                tipo = readlineSync.keyInSelect(tiposContas, "", {cancel: false}) + 1;
    
                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlineSync.questionFloat("");
    
        switch (tipo) {
             case 1:
                 console.log("Digite o Limite da conta (R$): ");
                 limite = readlineSync.questionFloat("");
                 Contas.cadastrar(
                 new ContaCorrente(Contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                break;
                case 2:
                console.log("Digite o Dia do aniversário da Conta Poupança: ");
                aniversario = readlineSync.questionInt("");
                Contas.cadastrar(new ContaPoupanca(Contas.gerarNumero(), agencia, 
                tipo, titular, saldo, aniversario));
                break;
                }
    
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

                Contas.listarTodas();

                keyPress()
                break;


            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por numero\n\n"
               , colors.reset);

                console.log("Digite o numero da Conta: ");
                numero = readlineSync.questionInt("");
                Contas.procurarPorNumero(numero);

                keyPress();
                break;


            case 4:
                 console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                 console.log("Digite o número da Conta: ");
                 numero = readlineSync.questionInt("");
   
                 let conta = Contas.buscarNoArray(numero);

                if (conta != null) {
                console.log("Digite o Número da agência: ");
                agencia = readlineSync.questionInt("");
  
                console.log("Digite o Nome do Titular da conta: ");
                titular = readlineSync.question("");

                tipo = conta.tipo;

                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlineSync.questionFloat("");
 
                switch (tipo) {
                case 1:
                console.log("Digite o Limite da conta (R$): ");
                limite = readlineSync.questionFloat("");
                Contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                break;
                case 2:
                console.log("Digite o Dia do aniversário da conta Poupança: ");
                aniversario = readlineSync.questionInt("");
                Contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                break;
                }
                } else {
                console.log(colors.fg.red, "\n\nA Conta numero: " + numero + 
               " não foi encontrada!", colors.reset);
               }

                 keyPress();
                 break;

            case 5:
                 console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                 console.log("Digite o número da Conta: ");
                 numero = readlineSync.questionInt("");
                 Contas.deletar(numero);
  
                keyPress();
                break;

            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlineSync.questionInt("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlineSync.questionFloat("");

                Contas.sacar(numero, valor);

                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlineSync.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = readlineSync.questionFloat("");

                Contas.depositar(numero, valor);

                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o número da Conta de Origem: ");
                numero = readlineSync.questionInt("");

                console.log("Digite o número da Conta de Destino: ");
                numeroDestino = readlineSync.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = readlineSync.questionFloat("");
 
                Contas.transferir(numero, numeroDestino, valor);
               
               keyPress()
                 break;


            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}




/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Paula Melo ");
    console.log("paulamelo2404@gmail.com");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/paulamelo2404");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}

main();