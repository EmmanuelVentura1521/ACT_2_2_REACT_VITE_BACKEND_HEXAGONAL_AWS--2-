# Act. 2.2 - React + Vite + Backend Hexagonal + AWS

## Local / WSL
Backend:
```bash
cd backend
npm install
npm run setup
npm start
```
Frontend (otra terminal):
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Abrir http://localhost:5173

## Frontend
El formulario crea y actualiza usuarios. La tabla consulta y elimina. Usa VITE_API_URL para apuntar al backend.

## AWS
EC2 Backend: Node + MySQL + Nginx.
EC2 Frontend: React compilado (dist) + Nginx.

### Backend EC2
```bash
sudo apt update
sudo apt install -y nodejs npm mysql-server nginx
sudo npm i -g pm2
cd backend
npm install
npm run setup
pm2 start server.js --name usuarios-api
pm2 save
```
Configura Nginx con deploy/nginx/backend.conf y abre puerto 80.

### Frontend EC2
Crea frontend/.env con:
```env
VITE_API_URL=http://IP_PUBLICA_BACKEND
```
Luego:
```bash
cd frontend
npm install
npm run build
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
```
Configura Nginx con deploy/nginx/frontend.conf.

## Evidencias
1. Backend local
2. Frontend local
3. CRUD local
4. 2 EC2
5. Security Groups
6. Backend público
7. Frontend público
8. CRUD desde URL pública
