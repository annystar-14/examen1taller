import express from "express";
import usuariosRouters from "./routes/usuarios.routes";


const app = express();
const port = process.env.PORT || 3009;

app.use(express.json());
app.use("/usuarios", usuariosRouters);

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});