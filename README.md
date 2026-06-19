# Trabalho de Conclusão - Integração Contínua com GitHub Actions

## Sobre o Projeto

Este é o trabalho de conclusão da disciplina de Integração Contínua para Automação de Testes, onde implementei uma pipeline automatizada usando GitHub Actions para rodar testes automaticamente no meu projeto de Serviço de Pagamento.

## O que foi pedido

- ✅ Pipeline com testes automatizados
- ✅ Três formas de executar: push, manual e agendado
- ✅ Gerar relatório de testes
- ✅ Salvar o relatório na pipeline
- ✅ Documentar tudo neste README

---

## Tecnologias Usadas

- **Node.js** - Para rodar o projeto
- **Mocha** - Para rodar os testes
- **Mochawesome** - Para gerar o relatório HTML
- **GitHub Actions** - Para a pipeline de CI/CD

---

## Estrutura do Projeto

```
.
├── .github/
│   └── workflows/
│       └── pipeline.yml        # Configuração da pipeline
├── src/
│   └── servicoDePagamento.js   # Código da aplicação
├── test/
│   └── servicoDePagamento.test.js  # Testes
├── package.json
└── README.md
```

---

## Como rodar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/fernandaagoliveira/trabalho-conclusao-integracao-continua.git
cd trabalho-conclusao-integracao-continua
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar os testes

```bash
npm test
```

Depois de rodar, o relatório fica salvo na pasta `mochawesome-report/`. É só abrir o arquivo `mochawesome.html` no navegador.

---

## Sobre os Testes

O projeto tem 3 testes que validam o serviço de pagamento:

1. Testa se pagamentos acima de R$ 100 ficam na categoria "cara"
2. Testa se pagamentos abaixo de R$ 100 ficam na categoria "padrao"
3. Testa se o método de consultar o último pagamento funciona corretamente

---

## A Pipeline

A pipeline foi configurada no arquivo `.github/workflows/pipeline.yml` e roda automaticamente de 3 formas diferentes:

### 1. Push (automático)
Toda vez que é feito push na branch `main`, a pipeline roda sozinha.

### 2. Manual
Pode ser executado manualmente pela aba Actions do GitHub clicando em "Run workflow".

### 3. Agendado
Configurado para rodar todo dia ao meio-dia (horário de Brasília).

### O que a pipeline faz

1. Baixa o código do repositório
2. Configura o Node.js
3. Instala as dependências
4. Roda os testes
5. Salva o relatório como artefato para download

---

## Como ver os resultados

1. Entre na aba **Actions** do repositório
2. Clique em uma execução da pipeline
3. Na seção **Artifacts**, clique em **relatorio-testes** para baixar
4. Descompacte o arquivo e abra o `mochawesome.html`


---

## Aluna

**Fernanda Aguilar**  
📧 faguilaroliveira@gmail.com

Disciplina: Integração Contínua para Automação de Testes - PGATS 2026

---

## Links

- [Repositório](https://github.com/fernandaagoliveira/trabalho-conclusao-integracao-continua)
- [Execuções da Pipeline](https://github.com/fernandaagoliveira/trabalho-conclusao-integracao-continua/actions)