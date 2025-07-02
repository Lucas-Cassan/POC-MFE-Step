const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const remoteEntryPath = path.join(__dirname, 'dist/mfe-step/remoteEntry.js');
const privateKeyPath = path.join(__dirname, 'private.pem');
const signaturePath = path.join(__dirname, 'dist/mfe-step/remoteEntry.js.sig');

const data = fs.readFileSync(remoteEntryPath);
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

const sign = crypto.createSign('SHA256');
sign.update(data);
sign.end();
const signature = sign.sign(privateKey);

fs.writeFileSync(signaturePath, signature.toString('base64'));
console.log('Signature générée :', signaturePath);