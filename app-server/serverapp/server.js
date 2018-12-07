const express    = require('express');

const path       = require('path');
const bodyParser = require('body-parser');
const cors       = require('cors');
const app        = express();
var mysql        = require('mysql');

var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",  
    database : "testmean"
    //socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var port = 4000;

//on envoi toutes les demandes
app.get('/allDemand' , function(req , res) {
    //set headers
    res.setHeader( 'Content-Type', 'application/json; charset=utf8')
    
    //prepare la requete
    var sql = "SELECT * from demande"
    
    // on envoie la requete et on recupère les données
    connection.query( sql , function(err ,rows , fileds){
        if(err) {  // en cas d'erreur
            connection.end();
            throw( err );
        }

        let result = [];

        rows.forEach(row => {
            result.push(row);
        });
        res.json(rows);
        //console.log(rows);

    });
});

// on envoi tout les utilisateurs
app.get('/allUser' , function(req , res){
    res.setHeader( 'Content-Type', 'application/json; charset=utf8');

    var sql ="SELECT * FROM utilisateur";

    connection.query( sql , function(err ,rows , fileds){
        if(err) {
            connection.end();
            throw( err );
        }

        let result = [];

        rows.forEach(row => {
            result.push(row);
        });
        console.log(result)
       
    });

});

// on post une nouvelle demande
app.post('/form' ,  function(req , res) {

    

    res.send('Message posté')
});


app.listen(port)

