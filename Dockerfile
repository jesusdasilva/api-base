# Utilizar la imagen oficial de Node.js (versión 20) como imagen base
FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo 'package.json' y 'package-lock.json' (si está disponible)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar los archivos y directorios restantes al directorio de trabajo en el contenedor
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]