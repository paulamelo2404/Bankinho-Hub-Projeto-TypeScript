🏦 Bankinho Hub
<p align="center"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"> <img src="https://img.shields.io/badge/Architecture-MVC-blue?style=for-the-badge" alt="MVC Architecture"> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT"> </p>
Bankinho Hub é um sistema bancário completo desenvolvido em TypeScript seguindo a arquitetura MVC (Model-View-Controller). Criado como projeto do bootcamp da Generation Brasil, oferece uma experiência robusta de simulação bancária com diferentes tipos de conta e operações financeiras.

✨ Funcionalidades
🏦 Tipos de Conta
💳 Conta Corrente: Operações bancárias padrão com limite especial

💰 Conta Poupança: Rendimentos sobre o saldo disponível

🔄 Operações Bancárias
👤 Cadastro de Contas: Criação de novas contas correntes e poupanças

💸 Depósitos: Adição segura de fundos às contas

📤 Saques: Retirada de valores com validações

🔄 Transferências: Envio de dinheiro entre contas do sistema

📊 Consultas: Verificação de saldo e extrato detalhado

🎨 Interface Colorida: Experiência visual aprimorada com cores no terminal

🏗️ Arquitetura do Projeto (MVC)
text
Bankinho-Hub-Projeto-TypeScript/
├── src/
│   ├── controller/           # Lógica de controle
│   │   └── ContaController.ts
│   ├── model/               # Modelos de dados
│   │   ├── Conta.ts
│   │   ├── ContaCorrente.ts
│   │   └── ContaPoupanca.ts
│   ├── repository/          # Camada de dados
│   │   └── ContaRepository.ts
│   ├── util/               # Utilitários
│   │   └── Colors.ts
│   └── Menu.ts             # View (Interface do usuário)
├── node_modules/           # Dependências
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md

🚀 Como Executar
Pré-requisitos
Node.js (versão 14 ou superior)

npm ou yarn

Git

Instalação e Execução
Clone o repositório

bash
git clone https://github.com/paulamelo2404/Bankinho-Hub-Projeto-TypeScript.git
cd Bankinho-Hub-Projeto-TypeScript
Instale as dependências

bash
npm install
Compile o projeto TypeScript

bash
npx tsc
Execute a aplicação

bash
node dist/Menu.js
⚡ Execução Rápida
bash
git clone https://github.com/paulamelo2404/Bankinho-Hub-Projeto-TypeScript.git
cd Bankinho-Hub-Projeto-TypeScript
npm install && npx tsc && node dist/Menu.js
📋 Scripts Disponíveis
json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/Menu.js",
    "dev": "tsc && node dist/Menu.js"
  }
}
Comandos úteis:

bash
# Compilar e executar
npm run dev

# Apenas compilar
npm run build

# Apenas executar
npm start

🛠️ Tecnologias e Padrões
TypeScript: Linguagem principal com tipagem estática

Node.js: Ambiente de execução

Arquitetura MVC: Separação de concerns (Model-View-Controller)

Repository Pattern: Camada de acesso a dados

Git: Controle de versão

OOP: Programação Orientada a Objetos

🎯 Estrutura de Classes
Modelos (/model)
Conta.ts: Classe abstrata base

ContaCorrente.ts: Implementação de conta corrente

ContaPoupanca.ts: Implementação de conta poupança

Controller (/controller)
ContaController.ts: Gerencia a lógica de negócio

Repository (/repository)
ContaRepository.ts: Gerencia o armazenamento de dados

Utilitários (/util)
Colors.ts: Códigos ANSI para cores no terminal


👨‍💻 Desenvolvedora
Paula Melo - Desenvolvimento e arquitetura

🙏 Agradecimentos
Generation Brasil - Pelo bootcamp e orientação

Instrutores e Colegas - Pelo apoio durante o desenvolvimento

Bankinho Hub - Aqui seu dinheiro descansa tranquilo! 💙✨
