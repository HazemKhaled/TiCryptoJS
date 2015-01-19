TiCryptoJS
=======
How to use [CryptoJS](https://code.google.com/p/crypto-js/) into Appcelerator Titanium project.

### Steps:
1. Add all reqired JavaScript files into .js file (ex: crypto.js)
2. Move this file to app/lib/crypto.js
3. Add exports.CryptoJS = CryptoJS; at the end of file exaple.js

### Example:
Use TripleDES with Cipher mode is ECB with Paddind AnsiX923, you need to copy code from each file in this sort

http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/tripledes.js<br>
http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/mode-ecb-min.js<br>
http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/pad-ansix923-min.js<br>

then add at the end of this file `exports.CryptoJS = CryptoJS;`

Ref: 
- [CommonJS Modules in Titanium](https://wiki.appcelerator.org/display/guides2/CommonJS+Modules+in+Titanium)
- [Using “CryptoJS” library in a Titanium mobile project to decrypt a text message [Triple DES]](http://stackoverflow.com/questions/15357375/using-cryptojs-library-in-a-titanium-mobile-project-to-decrypt-a-text-message)
- [TripleDES implementation in Javascript different comparing with C#] (http://stackoverflow.com/questions/20247953/tripledes-implementation-in-javascript-different-comparing-with-c-sharp)
