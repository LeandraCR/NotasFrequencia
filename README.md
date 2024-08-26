# NotasFrequencia

# Gerenciamento de Alunos

## Descrição

Este projeto é uma aplicação simples de gerenciamento de alunos, desenvolvida em React. A interface permite ao usuário adicionar alunos com suas respectivas notas e frequência, exibindo uma lista com a média e a frequência de cada aluno. A interface é minimalista e fácil de usar, adequada para cenários onde uma rápida visualização e atualização de dados de alunos é necessária.

## Instruções para Executar o Sistema

1. **Pré-requisitos**: 
   - Node.js instalado em sua máquina.
   - Gerenciador de pacotes NPM (instalado junto com o Node.js) ou Yarn.

2. **Instalação**:
   - Clone o repositório do projeto para sua máquina local.
   - No terminal, navegue até o diretório do projeto.
   - Execute o comando `npm install` (ou `yarn install` se estiver usando Yarn) para instalar todas as dependências necessárias.

3. **Execução**:
   - No terminal, ainda no diretório do projeto, execute o comando `npm start` (ou `yarn start`).
   - O projeto será iniciado e estará disponível em `http://localhost:3000/` no seu navegador.

4. **Uso**:
   - Acesse `http://localhost:3000/` no navegador.
   - Preencha os campos com o nome do aluno, suas notas e frequência.
   - Clique no botão "Adicionar Aluno".
   - A lista de alunos será atualizada com a média das notas e a frequência informada.

## Premissas Assumidas

- A média do aluno é calculada como a média aritmética das quatro notas inseridas.
- A frequência é inserida diretamente pelo usuário e é um valor percentual.
- O layout da interface foi projetado para funcionar em resoluções de tela típicas de desktops.

## Decisões de Projeto

- **Framework**: O projeto foi desenvolvido em React, devido à sua capacidade de criar interfaces de usuário dinâmicas e componentizadas.
- **Interface Simples**: A interface foi desenhada para ser extremamente simples e intuitiva, focando na funcionalidade básica de gerenciamento de alunos.
- **Cálculo de Média**: A média é calculada automaticamente a partir das notas inseridas, simplificando o processo para o usuário.
- **Lista de Alunos**: A lista de alunos é atualizada dinamicamente, permitindo ao usuário ver os resultados de suas entradas imediatamente.
- **Validação de Dados**: Não foi implementada uma validação extensiva de dados (ex: verificar se as notas estão entre 0 e 10). Isso foi uma escolha consciente para manter a simplicidade do projeto.

## Possíveis Melhorias Futuras

- **Validação de Entrada**: Implementar validações para garantir que as notas estejam dentro de um intervalo válido e que a frequência seja um valor percentual correto.
- **Persistência de Dados**: Adicionar funcionalidade para salvar os dados dos alunos localmente ou em um banco de dados, de forma que eles não se percam ao recarregar a página.
- **Design Responsivo**: Melhorar a interface para suportar dispositivos móveis e diferentes tamanhos de tela.

## Licença

Este projeto é de uso livre. Você pode modificá-lo e distribuí-lo como desejar.

