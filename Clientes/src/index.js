const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cfg = require("./config/cfg");
const notfound = require("./middleware/notfound");
const routecliente = require("./routes/cliente");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

mongoose.connect(cfg.db_path, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/dados_financeiros/clientes", routecliente);
app.use(notfound);

app.listen(4000, () =>
  console.log(`Servidor Clients on-line. em http://localhost:4000`)
);
