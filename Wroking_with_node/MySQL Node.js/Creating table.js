const express = require("express");
const database = require('./sqlConnection');
const app = express();
app.get("/", (req, res) => {
let tableName = 'gfg_table';
// Query to create table
let query = `CREATE TABLE ${tableName} (
name VARCHAR(255), address VARCHAR(255))`;
database.query(query, (err, rows) => {
if(err) return res.status(500)
.send("Table Creation Failed");
return res.send(
`Successfully Created Table - ${tableName}`);
})
});
app.listen(5000, () => {
console.log(`Server is up and running on 5000 ...`);
});
