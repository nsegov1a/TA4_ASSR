const dbConnection = require('../config/databaseCon');
const connection = dbConnection();

let getStore = async (req,res)=>{
    await connection.query("select * from Store", (err,result)=>{
    if (result)
        res.send(result);
    else
        res.status(500).send(err);
    });
}

/*
let addEstudiante = async (req,res)=>{
 const {estudianteId,Name,LastName } = req.body
 await connection.query(`INSERT INTO ESTUDIANTE
VALUES(${estudianteId}, '${Name}', '${LastName}')`, (err,result)=>{


 if (result)
 res.send({estudianteId,Name,LastName});
 else
 res.status(500).send(err);
 });
}

*/
module.exports = {
    getStore,
    //addEstudiante
}