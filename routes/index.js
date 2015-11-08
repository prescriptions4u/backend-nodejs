var express = require('express');
var Colu = require('colu');
var router = express.Router();


//COLU CONFIG
var COLU_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXRhcmFqZHV0dGEwMUBnbWFpbC5jb20iLCJleHAiOiIyMDE1LTExLTA3VDE2OjE0OjQxLjU3M1oiLCJ0eXBlIjoiYXBpX2tleSJ9.yg52G1WePJVKEHfKKChM8voDby7D7WePM_A712w3oFE';

var patientColu;
var pharmacyColu;
var doctorColu;

//Patient
var patientWallet = "1Hfez4FX7YkMXPgHGvpXEUbGWg6fTAH468";
var patientPrivateKey = "05e670d91a1afb5d1ed4145ce9ec7b4bb244e85fcfc8592b5fea0c495e66fadf";

//Doctor
var doctorWallet = "14MCNqtw74vnBnV4MzUfnRxYW9TbcW5FcU";
var doctorPrivateKey = "70ae09fcedef12d2e846906157c52b22780ac836d3bb7c20fc7c81dff341cb62";

//Pharmacy
var pharmacyWallet = "1KJbhVsA2kEF8JfxvVoBcQSnxS5zh1krvj";
var pharmacyPrivateKey = "cfb26f3c46dc1af0559a7be01c6f0599382b2ee453a6689e5072b8dd1e3d7834";





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

doctorService.sendToPatient = function(assetId) {
    var quantity = 1;
    var fromWallet = doctorWallet;
    var fromWalletToken = doctorPrivateKey;
    var toWallet = patientWallet;
    var issuerName = "Dr. Doctor";
    coluService.transferAsset(assetId, quantity, fromWallet, fromWalletToken, toWallet, issuerName);
};




patientService = {};
patientService.get = function (req, res, next) {


    console.log("patient service here...");

};

patientService.sendToPharmacy = function(assetId) {
    var quantity = 1;
    var fromWallet = patientWallet;
    var fromWalletToken = patientPrivateKey;
    var toWallet = pharmacyWallet;
    var issuerName = "Mr. Patient";
    coluService.transferAsset(assetId, quantity, fromWallet, fromWalletToken, toWallet, issuerName);
};



pharmacyService = {};
pharmacyService.post = function (req, res, next) {
    console.log("pharmacy service here...");
    console.log(req.param("hello"));

};


pharmacyService.sendToDoctor = function(assetId) {
    var quantity = 1;
    var fromWallet = pharmacyWallet;
    var fromWalletToken = pharmacyPrivateKey;
    var toWallet = doctorWallet;
    var issuerName = "Mr. Pharmacist";
    coluService.transferAsset(assetId, quantity, fromWallet, fromWalletToken, toWallet, issuerName);
};







var coluService = {};
coluService.transferAsset = function (colu, assetId, quantity, fromWallet, fromWalletToken, toWallet, issuerName) {
    //var phoneNumber = '+353899822774';
    //var assetId = "LEL5H3V37xXRxZGdwhMXUYXrjnEa1xwmNS8rQ";  //We got billions!!!

    var payload = {
        from: [fromWallet],
        to: [{
            address: toWallet,
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
coluService.initialize = function() {
    console.log("initalizing Colu for doctor, patient and pharmacy...");

    var doctorColuConfig = {
        network: 'mainnet',
        apiKey: COLU_API_KEY,
        privateSeed: doctorPrivateKey
    };
    var patientColuConfig = {
        network: 'mainnet',
        apiKey: COLU_API_KEY,
        privateSeed: patientPrivateKey
    };
    var pharmacyColuConfig = {
        network: 'mainnet',
        apiKey: COLU_API_KEY,
        privateSeed: pharmacyPrivateKey
    };

    doctorColu = new Colu(doctorColuConfig);
    doctorColu.init();
    pharmacyColu = new Colu(pharmacyColuConfig);
    pharmacyColu.init();
    patientColu = new Colu(patientColuConfig);
    patientColu.init();

    doctorColu.on('connect', function () {
        console.log("doctorColu initialized correctly");
    });
    pharmacyColu.on('connect', function () {
        console.log("pharmacyColu initialized correctly");
    });
    patientColu.on('connect', function () {
        console.log("patientColu initialized correctly");
    });
};

coluService.initialize();

module.exports = router;
