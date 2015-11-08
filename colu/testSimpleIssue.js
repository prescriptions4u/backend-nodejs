var Colu = require('colu');
var settings = {
    network: 'testnet',
    privateSeed: '8875bf569bd675dfe8192d741db897d6a76c4baa2cfda70ab50abf0028d43965'
};
var colu = new Colu(settings);
var asset = {
    amount: 25,
    metadata: {
        'assetName': 'Vallium',
        'issuer': 'Dr. Rob Ryan',
        'description': '10 mg of Vallium to Patient X'
    }
};
colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err);

        console.log("Body: ",body)
    })
});
colu.init();