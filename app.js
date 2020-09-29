const express = require('express');
 const app = express();
const morgan = require("morgan")
const router = require("./routes/index")
const models = require('./models');

const bodyParser = require('body-parser')

app.use("/",router)

// ... otras cosas
models.User.sync({force: true})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    // asegurate de reemplazar el nombre de abajo con tu app de express
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);





/*app.use(express.static('public'));
app.use("./",routes)
morgan('tiny')

app.get("./",function(req,res){
  res.send("asd")
})




app.listen(1337,function(){
  console.log("Escuchando");
})*/
