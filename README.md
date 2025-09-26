# 🏦 Bankinho Hub

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Architecture-MVC-blue?style=for-the-badge" alt="MVC Architecture">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT">
</p>

## 📋 Sobre o Projeto

O **Bankinho Hub** é um sistema bancário completo desenvolvido em TypeScript como projeto do bootcamp da Generation Brasil. Seguindo a arquitetura MVC, o sistema oferece uma experiência intuitiva e colorida para simulação de operações bancárias, com dois tipos de conta e funcionalidades essenciais.

## ✨ Funcionalidades

### 🏦 Tipos de Conta
- **💳 Conta Corrente** - Operações bancárias com limite especial
- **💰 Conta Poupança** - Conta com sistema de rendimentos

### 🔄 Operações Bancárias
- **👤 Cadastro de Contas** - Criação de novas contas correntes e poupanças
- **💸 Depósitos** - Adição segura de fundos às contas
- **📤 Saques** - Retirada de valores com validações de saldo
- **🔄 Transferências** - Envio de dinheiro entre contas do sistema
- **📊 Consultas** - Verificação de saldo e extrato detalhado
- **📊 apagar** - exclusão de contas do sistema
- **🎨 Interface Colorida** - Experiência visual aprimorada no terminal

## 🏗️ Arquitetura do Projeto (MVC)

O projeto segue o padrão **Model-View-Controller** para garantir organização e escalabilidade:

### 📋 Model (Camada de Dados)
- **`src/model/Conta.ts`** - Classe abstrata base
- **`src/model/ContaCorrente.ts`** - Implementação para conta corrente
- **`src/model/ContaPoupanca.ts`** - Implementação para conta poupança

### 🎨 View (Camada de Interface)
- **`src/Menu.ts`** - Interface principal do usuário

### ⚙️ Controller (Camada de Lógica)
- **`src/controller/ContaController.ts`** - Lógica de negócio das operações

### 💾 Repository (Camada de Persistência)
- **`src/repository/ContaRepository.ts`** - Gerenciamento de dados

### 🎯 Utilitários
- **`src/util/Colors.ts`** - Sistema de cores para o terminal

## 📁 Estrutura de Arquivos

```
Bankinho-Hub-Projeto-TypeScript/
│
├── src/
│   ├── controller/
│   │   └── ContaController.ts
│   ├── model/
│   │   ├── Conta.ts
│   │   ├── ContaCorrente.ts
│   │   └── ContaPoupanca.ts
│   ├── repository/
│   │   └── ContaRepository.ts
│   ├── util/
│   │   └── Colors.ts
│   └── Menu.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (Node Package Manager)

### 📥 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/paulamelo2404/Bankinho-Hub-Projeto-TypeScript.git
cd Bankinho-Hub-Projeto-TypeScript
```

2. **Instale as dependências**
```bash
npm install
```

### 🎯 Execução

**Opção 1: Compilar e executar**
```bash
npx tsc
node dist/Menu.js
```

**Opção 2: Comando único**
```bash
npm install && npx tsc && node dist/Menu.js
```

**Opção 3: Usando scripts do package.json**
```bash
npm run dev
```

## 📋 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Compila e executa o projeto |
| `npm start` | Executa o projeto já compilado |
| `npm run build` | Apenas compila o TypeScript |

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Linguagem principal com tipagem estática
- **Node.js** - Ambiente de execução JavaScript/TypeScript
- readline-sync - Captura de entrada do usuário no terminal
- **Arquitetura MVC** - Padrão de organização de código
- **Git** - Controle de versão
- **npm** - Gerenciador de pacotes

## 👥 Como Contribuir

Contribuições são bem-vindas! Siga estos passos:

1. **Faça um Fork** do projeto
2. **Crie uma Branch** para sua feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit suas mudanças**:
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```
4. **Push para a Branch**:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedora

- **Paula Melo** - [GitHub](https://github.com/paulamelo2404) - Desenvolvimento e arquitetura

## 🙏 Agradecimentos

- **Generation Brasil** - Pelo bootcamp e orientação técnica
- **Instrutores e Colegas** - Pelo apoio durante o desenvolvimento
- **Comunidade TypeScript** - Pela documentação e suporte

---

**Bankinho Hub** - Simplificando suas operações bancárias com tecnologia! 💙🚀

---

<div align="center">

*Desenvolvido com 💙 para o bootcamp Generation Brasil*

</div>
