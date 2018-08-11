var path = require("path");


module.exports = function (app) {



  app.get("/Questionnaire", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/Questionnaire.html"));
  });


  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });




};

