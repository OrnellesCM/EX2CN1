const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url = "mongodb://192.168.1.4/compras";
mongoose.connect(url).then(() => {
    console.log("MongoDB Conectado..");
}).catch((err) => {
    console.log("Erro ao conectar: " + err);
});
