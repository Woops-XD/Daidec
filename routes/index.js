var express = require('express');
var router = express.Router();
var db = require("../dbService");




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Boyuan Interview' } );
});


router.post("/api/name_exact", async (req, res) => {
  console.log("print the body", req.body)
  try {
    const [result] = await db.promise().query(`SELECT * FROM daidec.cars where Name = '${req.body.name}';`);
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
    });
  }
});


router.post("/api/name_contain", async (req, res) => {
  try {
    const [result] = await db.promise().query(`SELECT * FROM daidec.cars where Name LIKE  '%${req.body.name}%';`);
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
    });
  }
});

module.exports = router;
