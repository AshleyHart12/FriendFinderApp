var surveyData = require("../data/friends.js");


module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(surveyData);
  });

  app.post("/api/friends", function (req, res) {
    // surveyData.push(req.body);

    // let bestMatch = {name: photo: }

    // Create a variable to hold user scores (ie: Ahmed's array of scores)

    // Variable to hold the totalDifference

    // Set up for Loop to go through SurveyData (Friend's list)
    // Set up another for Loop inside ^ this loop (j loop) to go through score's array - Compare the user's answers to the potential friends answers (Ahmed, Carol, Sherry)

    // totalDifference - Math.abs (returns absolute value) - pass in potential friend score vs user score
    // 1st time around, compare to first friend - if/else - 



    res.json(surveyData[0]);
  })

  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data

    surveyData.length = [];

    res.json({
      ok: true
    });
  });
};