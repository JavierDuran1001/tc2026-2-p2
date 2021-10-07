const express = require("express")

const sequelize = require('./utils/database')
const vjRoutes = require('./routes/videojuegos')
const csRoutes = require('./routes/consola')
const csvjRoutes = require('./routes/consolaVideojuego')

const app = express();

app.use('/videojuegos',vjRoutes);
app.use('/consola',csRoutes);
app.use('/consolaVideojuego',csvjRoutes);

/*app.get("/prueba",(req,res)=>{
    res.send("Prueba de servidor funcionando")
})*/

sequelize.sync()
    .then(
        app.listen(8082,()=>{
            console.log("Servidor online en el puerto 8082")
        })
    )
    .catch(err=>console.log(err))