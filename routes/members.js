const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getMembers()
  .then((members) => {
    res.json({members: members})
  });
});

router.post('/', function(req, res, next) {
  let body = req.body
  queries.addMember(body)
  .then((newMember) => {
    var body = queries.newMemebersFoods(newMember[0].id)
    queries.addItem(body)
    .then((response)=> {
        res.json(newMember[0])
      })
  })
});

// addItem()
// newMemebersFoods()

module.exports = router;
