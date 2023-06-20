let singleRowInsert = () => {
let query = `INSERT INTO gfg_table
(name, address) VALUES (?, ?);`;
// Value to be inserted
let userName = "Pratik";
let userAddress = "My Address";
// Creating queries
db_con.query(query, [userName,
userAddress], (err, rows) => {
if (err) throw err;
console.log("Row inserted with id = "
+ rows.insertId);

});
