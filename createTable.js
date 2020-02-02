var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'mohammad',
    password : '633802asdASD',
    database:'ArabUdemy',
    insecureAuth : true
});

conn.connect(function(err){
if (err) {
    throw err;
    console.error();
    
}
console.log("Connected ");
var sql = "ALTER TABLE instructor ADD COLUMN credit_card int(100)";
conn.query(sql,function (err,result) {
   if (err) {
       throw err;
       console.error();
       
   } 
   console.log("Table created");
   
});

});

