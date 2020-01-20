const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

// MongoDB (Não-relacional)
mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-lyc3x.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.set("useCreateIndex", true);

app.use(express.json());
app.use(routes);

app.listen(3333);
