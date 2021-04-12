import CryptoJS from 'crypto-js';

var CryptoJSAesJson = {
  stringify: function (cipherParams) {
    var j = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
    if (cipherParams.iv) j.iv = cipherParams.iv.toString();
    if (cipherParams.salt) j.s = cipherParams.salt.toString();
    return JSON.stringify(j).replace(/\s/g, '');
  },
  parse: function (jsonStr) {
    var j = JSON.parse(jsonStr);
    var cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(j.ct) });
    if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
    if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);
    return cipherParams;
  }
}

export class AES256 {
  salt = '';
  constructor(salt) {
    this.salt = salt;
  }



  EncryptBody(input) {
    var Output;
    var EncryptedBody = CryptoJS.AES.encrypt(JSON.stringify(input), this.salt, { format: CryptoJSAesJson }).toString();

    Output = {
      data: EncryptedBody
    }
    Output = JSON.stringify(Output);
    return Output;
  }

  DecryptBody(input) {

    var Output;
    const DataToBeDecrypted = input.data ? input.data : input.error ? input.error : null;
    var DecryptedBody = null;
    if (DataToBeDecrypted) {
      DecryptedBody = JSON.parse(CryptoJS.AES.decrypt(DataToBeDecrypted, this.salt, { format: CryptoJSAesJson }).toString(CryptoJS.enc.Utf8));
    }

    Output = {
      data: DecryptedBody,
      success: input.success
    }

    return Output;
  }

  encrypt(input) {

    var output, hash, key, iv, encrypted;
    hash = CryptoJS.SHA256(this.salt).toString();
    key = CryptoJS.enc.Hex.parse(hash);
    iv = CryptoJS.enc.Hex.parse("0000000000000000000000000000000000000000000000000000000000000000");
    encrypted = CryptoJS.AES.encrypt(input, key, { mode: CryptoJS.mode.CBC, iv: iv });
    output = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    return output;
  }

  array_enc(array) {
    var output = array;
    for (var key in array) {

      output[key] = this.encrypt(array[key]);
    };
    return output;
  }

}