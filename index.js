const express = require("express")

const sequelize = require('./utils/database')
const vjRoutes = require('./routes/videojuegos')
const csRoutes = require('./routes/consola')

app.use('/videojuegos',vjRoutes);
app.use('/consola',csRoutes);
const app = express();

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