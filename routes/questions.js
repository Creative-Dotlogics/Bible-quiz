var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"error":true});
});


router.get('/questions', function(req, res, next) {
  res.json([
    {"question":"In what city was Jesus born? ","options":["Samaria","Bethlehem","Chicago","Accra"],"answer":1},
    {"question":"How many books are in the New Testament? ","options":["27","23","37","66"],"answer":0},
    {"question":"What type of insect did John the Baptist eat in the desert?","options":["Locusts","Grasshopper","Serpent","Snails"],"answer":0},
    {"question":"Who were the first apostles called to follow Jesus? ","options":["James and John","Peter and Felicia","Peter and Andrew","John and Matthew"],"answer":2},
    {"question":"How many people did Jesus feed with five loaves of bread and two fish? ","options":["about 100 men","about 6000 men","about 50000 men","about 5000 men"],"answer":3},
  ]);
});

module.exports = router;
