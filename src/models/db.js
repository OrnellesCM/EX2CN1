const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url = "mongodb://20.63.13.38/compras";
mongoose.connect(url).then(() => {
    console.log("MongoDB Conectado..");
}).catch((err) => {
    console.log("Erro ao conectar: " + err);
});
