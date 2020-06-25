const router = require('express').Router();

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })


router.post("/fileanalyse",upload.singe('fileToTest'),async (req, res, next) => {

  res.json({"name":req.file.originalname,"type":req.file.encoding,"size":req.file.size})
});

module.exports = router