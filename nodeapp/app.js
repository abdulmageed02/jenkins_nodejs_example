const mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000
// const host= process.env.HOST
// const user= process.env.USERNAME
// const password= process.env.PASSWORD
// const database= process.env.DATABASE


app.get("/db", (req, res) => {
var connection = mysql.createConnection({
  host     : host= process.env.HOST,
  user     : process.env.USERNAME,
  password : process.env.PASSWORD,
  port     : process.env.DATABASE
});
connection.connect(function(err) {
  if (err) {
	  res.send("db connection failed")
    console.error('Database connection failed: ' + err.stack);
    return;
 }
	res.send("db connection successful");
  console.log('Connected to database.');

connection.end();
});})

// const connection = mysql.createConnection({
//   host: host,
//   user: user,
//   password: password,
//   database: database
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
