var surveyData = require("../data/friends.js");


module.exports = function(app) {
 

  app.get("/api/friends", function(req, res) {
    res.json(surveyData);
  });

app.post("/api/friends", function(req, res) {
    surveyData.push(req.body);
    res.json(true);
})

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    
    surveyData.length = [];

    res.json({ ok: true });
  });
};
