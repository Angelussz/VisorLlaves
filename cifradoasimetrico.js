// var fs = require('fs');
// var pem2jwk = require('pem-jwk').pem2jwk;
// var jwk2pem = require('pem-jwk').jwk2pem;

// var strPublic = fs.readFileSync('./public.pem','ascii');
// var strPrivate = fs.readFileSync('./private.pem','ascii');

// var jwkPublic = pem2jwk(strPublic);
// console.log(jwkPublic);
// var jwkPrivate = pem2jwk(strPrivate);
// console.log(jwkPrivate);

// /

var fs = require('fs');
var rsaPemToJwk = require('rsa-pem-to-jwk');
 
var pemPublic = fs.readFileSync('./public.pem','ascii');
// console.log(pem)
 
var jwkPublic = rsaPemToJwk(pemPublic);

console.log("PUBLIC KEY JWK")
console.log(jwkPublic)


var pemPrivate = fs.readFileSync('./private.pem','ascii');
// console.log(pem)
 
var jwkPrivate = rsaPemToJwk(pemPrivate);

console.log("PRIVATE KEY JWK")
console.log(jwkPrivate)