var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"error":true});
});


router.get('/questions', function(req, res, next) {
  res.json([
    {
        "question": "In what city was Jesus born? ",
        "options": [
            {"text":"Samaria","label":"A","selected":false,"correct":false,"marginLeft":0},
            {"text":"Bethlehem","label":"B","selected":false,"correct":false,"marginLeft":0},
            {"text":"Chicago","label":"C","selected":false,"correct":false,"marginLeft":0},
            {"text":"Accra","label":"D","selected":false,"correct":false,"marginLeft":0}
        ],
        "answer": 1
    },
    {
        "question": "How many books are in the New Testament? ",
        "options": [
            {"text":"27","label":"A","selected":false,"correct":false,"marginLeft":0},
            {"text":"23","label":"B","selected":false,"correct":false,"marginLeft":0},
            {"text":"37","label":"C","selected":false,"correct":false,"marginLeft":0},
            {"text":"66","label":"D","selected":false,"correct":false,"marginLeft":0}
        ],
        "answer": 0
    },
    {
        "question": "What type of insect did John the Baptist eat in the desert?",
        "options": [
            {"text":"Locusts","label":"A","selected":false,"correct":false,"marginLeft":0},
            {"text":"Grasshopper","label":"B","selected":false,"correct":false,"marginLeft":0},
            {"text":"Serpent","label":"C","selected":false,"correct":false,"marginLeft":0},
            {"text":"Snails","label":"D","selected":false,"correct":false,"marginLeft":0}
        ],
        "answer": 0
    },
    {
        "question": "Who were the first apostles called to follow Jesus? ",
        "options": [
            {"text":"James and John","label":"A","selected":false,"correct":false,"marginLeft":0},
            {"text":"Peter and Felicia","label":"B","selected":false,"correct":false,"marginLeft":0},
            {"text":"Peter and Andrew","label":"C","selected":false,"correct":false,"marginLeft":0},
            {"text":"John and Matthew","label":"D","selected":false,"correct":false,"marginLeft":0}
        ],
        "answer": 2
    },
    {
        "question": "How many people did Jesus feed with five loaves of bread and two fish? ",
        "options": [
            {"text":"about 100 men","label":"A","selected":false,"correct":false,"marginLeft":0},
            {"text":"about 6000 men","label":"B","selected":false,"correct":false,"marginLeft":0},
            {"text":"about 50000 men","label":"C","selected":false,"correct":false,"marginLeft":0},
            {"text":"about 5000 men","label":"D","selected":false,"correct":false,"marginLeft":0}
        ],
        "answer": 3
    }
]);
});

module.exports = router;
