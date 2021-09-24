// setup the package variables
require("dotenv").config();
const express = require("express");

// initialize the app
const app = express();

//Habilitar express.json para leer datos
app.use(express.json({ extended: true }));

app.use(cors());

//routes
app.use("/getStudents", require("./routes/Students"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
