import CryptoJS from 'crypto-js';

/**
 * Encrypts a string using the AES algorithm with the provided encryption key.
 *
 * @param {string} string - The string to encrypt.
 * @param {string} key - The encryption key to use.
 * @returns {string} The encrypted string encoded in base64.
 * @throws {Error} If there's an error encrypting the string.
 */
export function encryptStringAES(string: string, key: string): string {
  const IV = CryptoJS.enc.Utf8.parse('1234567890123456'); // IV de 16 bytes
  const keycode = CryptoJS.enc.Utf8.parse(key.padEnd(32, ' ')); // Asegurar 32 bytes
  const encrypted = CryptoJS.AES.encrypt(string, keycode, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString(); // Devuelve el texto cifrado en Base64
}


/**
 * Decrypts a string that was encrypted using the AES algorithm with the provided encryption key.
 *
 * @param {string} string - The string to decrypt, encoded in base64.
 * @param {string} key - The encryption key that was used to encrypt the string.
 * @returns {string} The decrypted string.
 * @throws {Error} If there's an error decrypting the string.
 */
export function decryptStringAES(string: string, key: string): string {
  const iv = CryptoJS.enc.Utf8.parse('1234567890123456');
  const keycode = CryptoJS.enc.Utf8.parse(key.padEnd(32, ' '));

  // 🔹 Desencriptar directamente sin envolver en un objeto
  const decrypted = CryptoJS.AES.decrypt(string, keycode, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
