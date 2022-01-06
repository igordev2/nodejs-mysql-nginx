const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'desafio'
});

const table = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment primary key, name varchar(255) not null);`;
const insert = `INSERT INTO people (name) values ('Igor');`;

connection.query(table);
connection.query(insert);

const app = express();

app.get('/', async (request, response) => {
    connection.query(`SELECT * FROM people`, function (err, result, fields) {
        if (err) throw err;
        return response.send(`<h1>Full Cycle Rocks!</h1> <br/> ${JSON.stringify(result)}`);
    });
});

app.listen(3000, () => console.log('Running Node'));
