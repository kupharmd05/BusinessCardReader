var express = require("express");
const fs = require('fs');
const vision = require('@google-cloud/vision');
const bodyParser = require("body-parser");
const base64ToImage = require("base64-to-image");
const path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));



app.use(express.static('public'));
// require("./app.js")(app);
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.get("/user/image", function (req, res) {
});


app.post("/user/image", function (req, res) {


  var image = req.body;
  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "APIkey.json"
  });

  // Performs label detection on the image file
  client
    .textDetection()
    .then(results => {
      console.log(results[0].fullTextAnnotation.text);

    })
    .catch(err => {
      console.error(err);
    });


});






// =============================================================================
// SERVER
// =============================================================================

app.listen(PORT, function () {
  console.log("App listening on http://localhost:" + PORT);
});
