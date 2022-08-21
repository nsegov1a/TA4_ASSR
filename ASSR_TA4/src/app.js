const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('port', process.env.PORT | 3000);

app.get('/', (req, res) => {
    res.send("Prueba de API");
});

app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  }) 

app.use("/api/store", require("./routes/store"));

app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);
