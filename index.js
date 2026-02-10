const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (_req,res)=>{
    res.send('Integracion continua funcionando');
});

app.listen(PORT, ()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});