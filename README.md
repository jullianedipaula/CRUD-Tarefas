# CRUD de Tarefas

API REST para gerenciamento de tarefas (tasks) desenvolvida com Node.js puro, sem uso de frameworks externos.

## 📋 Funcionalidades

- ✅ Criar uma tarefa
- ✅ Listar todas as tarefas
- ✅ Atualizar uma tarefa por `id`
- ✅ Remover uma tarefa por `id`
- ✅ Marcar/desmarcar uma tarefa como completa por `id`
- ✅ Buscar tarefas por `title` ou `description`
- ✅ Importação em massa de tarefas através de arquivo CSV

## 🚀 Tecnologias

- Node.js
- HTTP nativo
- File System
- Streams
- csv-parse
- Biome 

## 🔧 Instalação

```bash
# Clone o repositório (ou baixe os arquivos)
cd CRUD-Tarefas

# Instale as dependências
npm install
```

## ▶️ Como Executar

```bash
# Modo desenvolvimento (com auto-reload)
npm run dev
```

O servidor estará rodando em `http://localhost:3333`

## 📡 Rotas da API

### Criar tarefa

```http
POST /tasks
Content-Type: application/json

{
  "title": "Título da tarefa",
  "description": "Descrição da tarefa"
}
```

**Resposta:** `201 Created`

---

### Listar todas as tarefas

```http
GET /tasks
```

**Resposta:** `200 OK`

```json
[
  {
    "id": "uuid",
    "title": "Título da tarefa",
    "description": "Descrição da tarefa",
    "completed_at": null,
    "created_at": "2026-03-05T10:00:00.000Z",
    "updated_at": "2026-03-05T10:00:00.000Z"
  }
]
```

---

### Buscar tarefas

```http
GET /tasks?search=termo
```

Busca tarefas que contenham o termo no `title` ou `description`.

**Resposta:** `200 OK`

---

### Atualizar tarefa

```http
PUT /tasks/:id
Content-Type: application/json

{
  "title": "Novo título",
  "description": "Nova descrição"
}
```

> **Nota:** É possível enviar apenas `title` ou apenas `description` para atualizar somente um campo.

**Resposta:** `204 No Content`

**Erro:** `404 Not Found` se o ID não existir

---

### Deletar tarefa

```http
DELETE /tasks/:id
```

**Resposta:** `204 No Content`

**Erro:** `404 Not Found` se o ID não existir

---

### Marcar/Desmarcar como completa

```http
PATCH /tasks/:id/complete
```

Alterna o estado de conclusão da tarefa. Se estava incompleta, marca como completa (adiciona `completed_at`). Se estava completa, marca como incompleta (remove `completed_at`).

**Resposta:** `204 No Content`

**Erro:** `404 Not Found` se o ID não existir

---

## 📥 Importação via CSV

O projeto inclui um script para importar tarefas em massa através de um arquivo CSV.

### Formato do arquivo CSV

O arquivo deve ter o seguinte formato:

```csv
title,description
Task 01,Descrição da Task 01
Task 02,Descrição da Task 02
Task 03,Descrição da Task 03
```

### Como executar a importação

1. Certifique-se de que o servidor está rodando:
```bash
npm run dev
```

2. Em outro terminal, execute o script de importação:
```bash
node streams/import-csv.js
```

O script lê o arquivo `streams/tasks.csv` e cria as tarefas através da API.

## 🗄️ Banco de Dados

O banco de dados é um arquivo JSON simples (`db.json`) que persiste os dados localmente. A estrutura é:

```json
{
  "tasks": [
    {
      "id": "uuid",
      "title": "string",
      "description": "string",
      "completed_at": "date | null",
      "created_at": "date",
      "updated_at": "date"
    }
  ]
}
```

## 🎨 Formatação de Código

O projeto usa o Biome para formatação:

```bash
npm run format
```
