var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'mohammad',
    password : '633802asdASD',
    insecureAuth : true
});

conn.connect(function(err){
if (err) {
    console.error();
    
}
console.log("Connected ");

});

