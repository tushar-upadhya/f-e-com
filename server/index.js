const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDb = require("./config/db.js");
const router = require("./routes/index.js");

const app = express();
app.use(cors());
app.use("/api", router);

const PORT = 8000 || process.env.PORT;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("PORT::", PORT);
    console.log("bd:");
  });
});
