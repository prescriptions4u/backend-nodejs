var Colu = require('colu');
var apikey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXRhcmFqZHV0dGEwMUBnbWFpbC5jb20iLCJleHAiOiIyMDE1LTExLTA3VDE2OjE0OjQxLjU3M1oiLCJ0eXBlIjoiYXBpX2tleSJ9.yg52G1WePJVKEHfKKChM8voDby7D7WePM_A712w3oFE';

var settings = {
    network: 'mainnet',
    apiKey: apikey,
    privateSeed: '70ae09fcedef12d2e846906157c52b22780ac836d3bb7c20fc7c81dff341cb62'
};
var colu = new Colu(settings);

//transferData = testSimpleSend()
//var assetId = transferData.assetId

var assetId = 'LJzQb6BdgFrdMqPNhd6Do7kRbVEbivdrUiB9h';
var fromAddress = '1Lfi5JCuet1yQaYHRghakoDw5EgfnT9T1k';
var toAddress = '1BYpxiCUufqyNiRvFPexw4aGQaTBmWuXYQ';
var phoneNumber = '+353899822774';

var send = {
    from: [fromAddress],
    to: [{
        phoneNumber: phoneNumber,
        assetId: assetId,
        amount: 50
    }],
    metadata: {        
        'assetName': 'Vallium New 123',
        'issuer': 'Dr. Rob OConner',
        'description': '1 mg of Xanax'
    }
};

colu.on('connect', function () {
    colu.sendAsset(send, function (err, body) {
        if (err) return console.error(err);
        console.log("Body: ", body)
    })
});

colu.init();