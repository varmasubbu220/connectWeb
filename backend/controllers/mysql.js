var mysql = require('mysql')
 
 const Mysql=()=>{
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Varma@20",
        database:"mydatabase"
      });
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
  //con.query("USE users;");

  var data = "INSERT INTO users (name, address) VALUES ?";
  var values = [['varma', 'vizag']];

  con.query(data, [values], function(err, result) {
    if (err) throw err;
    console.log("Data inserted into database");
    con.end();
  });
});

}
module.exports=Mysql;