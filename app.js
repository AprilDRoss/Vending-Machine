// app.js
const express = require('express');
const mocha = require("mocha");
const bodyParser = require('body-parser');
const routes = require("./routes/routes.js");
const app = express();

app.use(routes);




app.get('/api/customer/items', function (req, res) {
  res.json({"hello": "world"})
})

if (require.main === module) {
  app.listen(3000, function () {
      console.log('Express running on http://localhost:3000/.')
  });
}

module.exports = app;
