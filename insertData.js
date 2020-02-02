
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
var sql = "INSERT INTO course (id,name,rate,description,cost) VALUES ?";
var values = [
  [101110, 'Java-course',null,'java for begginers',30],
  [101111, 'Python-course',null,'python for begginers',20],
  [101112, 'Database-course',null,'web-development of html,css,js',88],
  [101113, 'Php-course',null,'server-side learn',99],
  [101114, 'C#-course',null,'road to MVC,gaming',100],
  [101115, 'C++-course',null,'basics in C++',220]

];
conn.query(sql, [values],function (err,result) {
   if (err) {
       throw err;
       console.error();
       
   } 
   console.log("Table created");
   
});

});



