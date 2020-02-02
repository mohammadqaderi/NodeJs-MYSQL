var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'mohammad',
    password : '633802asdASD',
    insecureAuth : true
});

conn.connect(function(err){
if (err) {
    throw err;
    console.error();
    
}
console.log("Connected ");
conn.query('CREATE DATABASE ArabUdemy',function (err,result) {
   if (err) {
       throw err;
       console.error();
       
   } 
   console.log("database created");
   
});

});

