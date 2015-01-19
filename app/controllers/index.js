var CryptoJS = require('tripledes').CryptoJS;
var key = $.key.text;
var useHashing = true;

if (useHashing) {
	key = CryptoJS.MD5(key).toString();
	var k1 = key.substring(0, 16);
	key = key + k1;
}

var options = {
	mode : CryptoJS.mode.ECB,
	padding : CryptoJS.pad.Pkcs7
};

var keyHex = CryptoJS.enc.Hex.parse(key);

$.hexadecimal.text = 'hexadecimal key\n' + keyHex.toString();

function encrypt(e) {
	var password = $.password.value;

	var textWordArray = CryptoJS.enc.Utf8.parse(password);

	var encrypted = CryptoJS.TripleDES.encrypt(textWordArray, keyHex, options);

	var base64String = encrypted.toString();

	alert('base64: ' + base64String);
}

function decrypt(e) {
	var base64String = $.result.value;

	var decrypted = CryptoJS.TripleDES.decrypt({
		ciphertext : CryptoJS.enc.Base64.parse(base64String)
	}, keyHex, options);

	alert('decrypted: ' + decrypted.toString(CryptoJS.enc.Utf8));
}

$.index.open();
