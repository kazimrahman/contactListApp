var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
   console.log("received get");

    person1 = {
      name: "tim",
      email: "tim@email.com",
      number: "(111) 111-1111"
   };

   person2 = {
      name : "john",
      email: "john@email.com",
      number: "(222) 222-2222"
   };

   var contactlist = [person1, person2];
   res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");