# Testes da API JSONServer - Etapa 2

## Configuração
- **Servidor**: http://localhost:3001
- **Entidades disponíveis**: 
  - `/usuarios` 
  - `/postagens`

## Como executar os testes

### 1. Iniciar o servidor
```bash
npm start
# ou se a porta 3000 estiver ocupada:
npx json-server ./db/db.json --port 3001
```

### 2. Aplicativos recomendados para testes
- **Postman** (https://www.postman.com/)
- **Thunder Client** (extensão do VS Code)
- **Insomnia** (https://insomnia.rest/)

## Testes para a entidade USUARIOS

### GET - Listar todos os usuários
- **Método**: GET
- **URL**: `http://localhost:3001/usuarios`
- **Resultado esperado**: Lista com 3 usuários

### GET - Buscar usuário por ID
- **Método**: GET
- **URL**: `http://localhost:3001/usuarios/187cb7e5-e097-4224-8bc7-b610c855e2b1`
- **Resultado esperado**: Dados do usuário admin

### POST - Criar novo usuário
- **Método**: POST
- **URL**: `http://localhost:3001/usuarios`
- **Headers**: `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "login": "novousuario",
  "senha": "123456",
  "nome": "Novo Usuario Teste",
  "email": "novo@teste.com"
}
```

### PUT - Atualizar usuário existente
- **Método**: PUT
- **URL**: `http://localhost:3001/usuarios/ec37c83d-4b7f-458d-9e10-3fda7d37cd3e`
- **Headers**: `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "id": "ec37c83d-4b7f-458d-9e10-3fda7d37cd3e",
  "login": "user_atualizado",
  "senha": "nova123",
  "nome": "Usuario Comum Atualizado",
  "email": "user_novo@abc.com"
}
```

### DELETE - Remover usuário
- **Método**: DELETE
- **URL**: `http://localhost:3001/usuarios/5b4a8f9c-1f2e-4d5a-9c7b-8e6f1a2b3c4d`

## Testes para a entidade POSTAGENS

### GET - Listar todas as postagens
- **Método**: GET
- **URL**: `http://localhost:3001/postagens`
- **Resultado esperado**: Lista com 5 postagens

### GET - Buscar postagem por ID
- **Método**: GET
- **URL**: `http://localhost:3001/postagens/1`
- **Resultado esperado**: Dados da postagem do Pedro Henrique

### POST - Criar nova postagem
- **Método**: POST
- **URL**: `http://localhost:3001/postagens`
- **Headers**: `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "autor": "Carlos Silva",
  "data": "15 de dezembro de 2024",
  "texto": "Compartilhando dicas de manutenção preventiva para carros esportivos...",
  "membro": "20/11/2024",
  "imagem": "imagens/fastback1.jpg"
}
```

### PUT - Atualizar postagem existente
- **Método**: PUT
- **URL**: `http://localhost:3001/postagens/2`
- **Headers**: `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "id": "2",
  "autor": "Maria Clara Santos",
  "data": "10 de setembro de 2025 - ATUALIZADO",
  "texto": "Oi pessoal, vim compartilhar um problema RESOLVIDO que estava me incomodando no meu Honda Civic...",
  "membro": "19/04/2025",
  "imagem": "imagens/barney.jpeg"
}
```

### DELETE - Remover postagem
- **Método**: DELETE
- **URL**: `http://localhost:3001/postagens/3`

## Checklist de Testes
- [ ] GET /usuarios (listar todos)
- [ ] GET /usuarios/:id (buscar por ID)
- [ ] POST /usuarios (criar novo)
- [ ] PUT /usuarios/:id (atualizar)
- [ ] DELETE /usuarios/:id (remover)
- [ ] GET /postagens (listar todas)
- [ ] GET /postagens/:id (buscar por ID)
- [ ] POST /postagens (criar nova)
- [ ] PUT /postagens/:id (atualizar)
- [ ] DELETE /postagens/:id (remover)

## Observações
- Faça um PRINT de cada teste executado mostrando o resultado
- O JSONServer automaticamente gera IDs para novos registros
- Após os testes DELETE, os registros são removidos permanentemente do db.json