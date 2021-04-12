var express = require('express');
var router = express.Router();
const Mongolib = require("../db/Mongolib");
const Joi = require("joi");

/* GET home page. */
router.get('/', function (req, res, next) {
    Mongolib.getDatabase(db => {
        Mongolib.findDocuments(db, docs => {
            res.send(docs);
        })
    })
});

router.post('/', function(req, res) {
    const { error } = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    Mongolib.getDatabase(db => {
        Mongolib.insertOne(db, req.body, docs => {
            res.send(docs);
        })
    })
  });

  const validate = (offer) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      company: Joi.string().required(),
      salary: Joi.string().required(),
      city: Joi.string().required(),
    });
  
    return schema.validate(offer);
  };

module.exports = router;