const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");

const cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json())
app.use('/api' , require("./Routes/creatuser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
