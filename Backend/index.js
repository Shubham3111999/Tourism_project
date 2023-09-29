const connectToMango=require("./db");
const express = require('express')
 var cors = require('cors')


connectToMango();

const app = express();
const port = 2000 ;

app.use(cors()) 

app.use(express.json());  

app.use("/api/places", require("./routes/places"));
app.use("/api/users", require("./routes/Users"));

app.listen(port, () => {
    console.log(`tourism app listening on port ${port}`)
  })



