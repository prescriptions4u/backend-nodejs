var express = require('express');
var Colu = require('colu');
var router = express.Router();

var COLU_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXRhcmFqZHV0dGEwMUBnbWFpbC5jb20iLCJleHAiOiIyMDE1LTExLTA3VDE2OjE0OjQxLjU3M1oiLCJ0eXBlIjoiYXBpX2tleSJ9.yg52G1WePJVKEHfKKChM8voDby7D7WePM_A712w3oFE';

var coluSettings = {
    network: 'mainnet',
    apiKey: apikey,
    privateSeed: '70ae09fcedef12d2e846906157c52b22780ac836d3bb7c20fc7c81dff341cb62'
};

var colu = new Colu(settings);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/patient', function(req, res, next) {
    patientService.get(req, res, next);
    res.render('patient', { title: 'Express' });
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






doctorService = {};
doctorService.post = function (req, res, next) {
    console.log("doctor service here...");

};

doctorService.sendToPatient = function() {

};




patientService = {};
patientService.get = function (req, res, next) {
    var patientName = req.param('');
    var patientDob = req.param('');
    var patientAddress = req.param('');
    var patientPrivateKey = req.param('');

    console.log("patient service here...");

};

patientService.sendToPharmacy = function() {

};



pharmacyService = {};
pharmacyService.post = function (req, res, next) {
    console.log("pharmacy service here...");
    console.log(req.param("hello"));

};


pharmacyService.sendToDoctor = function() {


};


var coluService = {};
coluService.transferAsset = function (quantity, fromAddress, toAddress, token, issuerName) {
    var phoneNumber = '+353899822774';
    var assetId = "LEL5H3V37xXRxZGdwhMXUYXrjnEa1xwmNS8rQ";  //We got billions!!!

    var payload = {
        from: [fromAddress],
        to: [{
            phoneNumber: phoneNumber,
            assetId: assetId,
            amount: quantity
        }],
        metadata: {
            'assetName': 'Vallium',
            'issuer': issuerName,
            'description': quantity + ' mg of Vallium'
        }
    };
    colu.sendAsset(payload, function (err, body) {
        if (err) {
            console.error(err);
            return false;
        }else{
            console.log("Body: ", body);
            return true;
        }
    })
};








module.exports = router;
