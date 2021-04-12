function encryptExtendedVigenere(word,keyword) {
    var encryptWord = "";
    word = word.replace(/\s/g, '');
    if(keyword.length < word.length) {
        autoVergeKey = keyword+word.slice(0, (word.length-keyword.length));
    }
    for (var i = 0;i < word.length;i++) {
        encryptWord += String.fromCharCode(word.charCodeAt(i) + autoVergeKey.charCodeAt(i%keyword.length) % 256);
    }
    $('#chiperText').html(encryptWord);
}

function decryptExtendedVigenere(word,keyword) {
    var decryptWord = "";
    for (var i = 0;i < word.length;i++) {
        decryptWord += String.fromCharCode(word.charCodeAt(i) - autoVergeKey.charCodeAt(i%keyword.length) % 256);
    }
    $('#chiperText').html(decryptWord);
}