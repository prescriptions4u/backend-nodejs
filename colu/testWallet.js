var Colu = require('colu');
var apikey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXRhcmFqZHV0dGEwMUBnbWFpbC5jb20iLCJleHAiOiIyMDE1LTExLTA3VDE2OjE0OjQxLjU3M1oiLCJ0eXBlIjoiYXBpX2tleSJ9.yg52G1WePJVKEHfKKChM8voDby7D7WePM_A712w3oFE';
var settings = {
    network: 'mainnet',
    apiKey: apikey,
    privateSeed: null
};

var colu = new Colu(settings);
colu.on('connect', function () {
    var privateSeed = colu.hdwallet.getPrivateSeed();

    console.log("privateSeed: ", privateSeed);
    var address = colu.hdwallet.getAddress();
    console.log("address:", address)
});

colu.init();