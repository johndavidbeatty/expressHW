// var nerdMatch = require("../data/friends")
var nerdArray = require("../data/friends");

module.exports = function (app) {

// this isn't used, just for testing/diagnostics
  app.get("/api/nerds", function (req, res) {
    res.json(nerdArray);

  });

  app.post("/api/nerds", function (req, res) {

    let ttlDiffs = [];


    for (i = 0; i < nerdArray.length; i++) {

      // Math to determine best match with lowest difference from current nerdArray.
      // put the difference into a ttlDiffs array, and then the diff position in the array will be the same as best match in nerd array

      let diff = 0;
      for (j = 0; j < 10; j++) {
        diff += Math.abs(req.body.answers[j] - nerdArray[i].answers[j])
      };
      ttlDiffs.push(diff)
    };

    // after above diff calcs, use the math.min to find the index in array with lowest value from Math.min()

    var bestNerd = {
      name: nerdArray[ttlDiffs.indexOf(Math.min(...ttlDiffs))].name,
      picLink: nerdArray[ttlDiffs.indexOf(Math.min(...ttlDiffs))].picLink
    }
    // send the new object back to browser

    res.json(bestNerd)

    // add new supplicant to the master nerdarray for future matching.
    nerdArray.push({
      name: req.body.name,
      picLink: req.body.picLink,
      answers: req.body.answers
    })


  });
};
