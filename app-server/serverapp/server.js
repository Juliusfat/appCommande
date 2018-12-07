const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testmean"
    //socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var port = 4000;

//on envoi toutes les demandes
app.get('/allDemand', function (req, res) {
    //set headers
    res.setHeader('Content-Type', 'application/json; charset=utf8')

    //prepare la requete
    var sql = "SELECT * from demande"

    // on envoie la requete et on recupère les données
    connection.query(sql, function (err, rows, fileds) {
        if (err) {  // en cas d'erreur
            connection.end();
            throw (err);
        }

        // let result = [];  rows.forEach(row => { result.push(row); });

        res.json(rows);

    });
});

// on envoi tout les utilisateurs
app.get('/allUser', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf8');

    var sql = "SELECT * FROM utilisateur";

    connection.query(sql, function (err, rows, fileds) {
        if (err) {
            connection.end();
            throw (err);
        }
        let result = [];

        rows.forEach(row => {
            result.push(row);
        });
        res.json(rows);

    });
});



// on post une nouvelle demande
app.post('/form', function (req, res) {

    res.setHeader('content-Type', 'application/json');

    //var data = JSON.parse(res)

    console.log(req.body)
    
    //envoyer la requete en base de donnée 
    var sql = "INSERT INTO demande( idUtilsateur, motif, quantite, produit, lien, comentaire_demande, date_validation, etat_commande, date_creation, commentaire_acheteur) VALUES  (?)";
    var values = [
        req.body.idUtilsateur,
        req.body.motif ,
        req.body.quantite ,
        req.body.produit ,
        req.body.lien ,
        req.body.commentaire_demande ,
        req.body.date_validation , 
        req.body.etat_commande , 
        req.body.date_creation , 
        req.body.commentaire_acheteur
        ]
    
        //console.log(values)

    connection.query(sql, [values] , function (err, rows, fileds) {
        if (err) throw (err)

        console.log(rows);
        
    });


    //toujour envoyé une reponse du server
    res.json();
});


app.listen(port)

