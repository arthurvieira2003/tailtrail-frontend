# Imagem base Node.js
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto dos arquivos
COPY . .

# Expor a porta que a aplicação usa
EXPOSE 3443

# Comando para iniciar a aplicação
CMD ["node", "app.js"]