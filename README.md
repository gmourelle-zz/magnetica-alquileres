# magnetica-alquileres

App sencilla para realizar un alquiler de una propiedad

## Running This Sample

Para correr la App hay que realizar los siguientes pasos:

```bash
cd alquiler-app-api

# instalar backend deps
npm i

# run backend
node src

# ejecutar este comando para crear algunos departamentos a alquilar
# con curl o postman

curl -X POST -H 'Content-Type: application/json' -d '{
  "ubicacion":"Caballito",
  "ambientes":2,
   "metros":70,
  "pNoche":100,
   "pMes":3000}' localhost:8081

# instalar frontend deps
cd alquiler-app-client
npm i

# run App
npm start
```
