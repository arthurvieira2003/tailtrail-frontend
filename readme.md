# TailTrail - Sistema de Monitoramento de Pets

O TailTrail é um sistema web para monitoramento em tempo real de pets através de dispositivos GPS. O sistema permite visualizar a localização dos pets em um mapa interativo, receber alertas de anomalias e gerenciar múltiplos pets.

## 🌐 Demo Online

O sistema está disponível para acesso em:
http://148.113.172.140:3443/

## 🛠 Funcionalidades

- Visualização em tempo real da localização dos pets no mapa
- Detecção automática de anomalias de movimento
- Sistema de alertas para comportamentos suspeitos
- Gerenciamento de múltiplos pets
- Interface responsiva e intuitiva

## 📡 API Endpoints

### GET /api/petUpdates

Endpoint SSE (Server-Sent Events) para receber atualizações em tempo real da localização dos pets.

### POST /api/getPetData

Endpoint para enviar dados de localização do pet.

**Body da requisição:**

```json
[
  {
    "latitude": 123.456,
    "longitude": 78.91
  }
]
```

## 🚨 Sistema de Alertas

O sistema detecta automaticamente as seguintes anomalias:

- Velocidade excedida
- Anomalias de distância
- Possíveis teletransportes (mudanças bruscas de localização)

## 🗃 Banco de Dados

O sistema utiliza MySQL com Sequelize ORM e possui as seguintes entidades:

- Users (Usuários)
- Pets
- Devices (Dispositivos)
- Alerts (Alertas)

## 🔧 Configuração Local

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

## 🐾 Como Usar

1. Acesse a interface web
2. Cadastre seus pets na seção "Pets"
3. Visualize a localização em tempo real no mapa
4. Monitore alertas na seção "Alertas"

## 🔒 Segurança

O sistema implementa:

- Criptografia de senhas com bcrypt
- Validação de dados
- Proteção contra SQL injection via ORM
- Sanitização de inputs
