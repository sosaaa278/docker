# ────────────────────────────────
# 1. Imagen base
# ────────────────────────────────
FROM node:18-alpine

# ────────────────────────────────
# 2. Directorio de trabajo
# ────────────────────────────────
WORKDIR /app

# ────────────────────────────────
# 3. Copiar package.json e instalar dependencias
# ────────────────────────────────
COPY package*.json ./

RUN npm install --production

# ────────────────────────────────
# 4. Copiar el código al contenedor
# ────────────────────────────────
COPY . .

# ────────────────────────────────
# 5. Exponer puerto
# ────────────────────────────────
EXPOSE 3000

# ────────────────────────────────
# 6. Comando de inicio
# ────────────────────────────────
CMD ["node", "src/server.js"]
