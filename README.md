# NotasFrequencia

# Gerenciamento de Alunos

## Descrição

Este projeto é uma aplicação simples de gerenciamento de alunos. A interface permite ao usuário adicionar alunos com suas respectivas notas e frequência, e exibe uma lista de alunos com suas médias e frequência. A interface é minimalista e fácil de usar, adequada para cenários onde uma rápida visualização e atualização de dados de alunos é necessária.

## Instruções para Executar o Sistema

1. **Pré-requisitos**: 
   - Navegador web moderno (Google Chrome, Firefox, Edge, etc.)
   - Servidor HTTP simples (opcional, mas recomendado para melhor funcionamento), como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do Visual Studio Code.

2. **Execução**:
   - Abra o arquivo `index.html` no seu navegador diretamente ou utilizando um servidor HTTP.
   - A página será carregada, exibindo os campos para entrada de dados de alunos.

3. **Uso**:
   - Preencha os campos com o nome do aluno, suas notas e frequência.
   - Clique no botão "Adicionar Aluno".
   - A lista de alunos abaixo será atualizada com a média das notas e a frequência informada.

## Premissas Assumidas

- A média do aluno é calculada como a média aritmética das quatro notas inseridas.
- A frequência é inserida diretamente pelo usuário e é um valor percentual.
- O layout da interface foi projetado para funcionar em resoluções de tela típicas de desktops.

## Decisões de Projeto

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
