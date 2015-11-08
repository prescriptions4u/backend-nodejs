var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/patient', function(req, res, next) {
    patientService.get(req, res, next);
    res.render('patient', { title: 'Express' });
});

router.get('/omg', function(req, res, next) {
    res.render('omg', { title: 'Express' });
});

router.get('/doctor', function(req, res, next) {
    doctorService.post(req, res, next);
    res.render('doctor', { title: 'Express' });
});

router.get('/pharmacy', function(req, res, next) {
    pharmacyService.post(req, res, next);
    res.render('pharmacy', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});






patientService = {};
patientService.get = function (req, res, next) {
    var patientName = req.param('');
    var patientDob = req.param('');
    var patientAddress = req.param('');
    var patientPrivateKey = req.param('');

    console.log("patient service here...");

};





pharmacyService = {};
pharmacyService.post = function (req, res, next) {
    console.log("pharmacy service here...");
    console.log(req.param("hello"));

};





doctorService = {};
doctorService.post = function (req, res, next) {
    console.log("doctor service here...");

};






module.exports = router;
