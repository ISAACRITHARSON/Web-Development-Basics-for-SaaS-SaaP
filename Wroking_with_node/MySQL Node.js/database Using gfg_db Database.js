app.get("/createDatabase", (req, res) => {
let databaseName = "gfg_db";
let createQuery = `CREATE DATABASE ${databaseName}`;
// use the query to create a Database.
database.query(createQuery, (err) => {
if(err) throw err;
console.log("Database Created Successfully !");
let useQuery = `USE ${databaseName}`;
database.query(useQuery, (error) => {
if(error) throw error;
console.log("Using Database");
return res.send(

`Created and Using ${databaseName} Database`);

})
});
});
