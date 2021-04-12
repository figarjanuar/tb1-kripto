function encryptAutoVigenere(word,keyword) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encryptWord = "";
    word = word.replace(/\s/g, '');
    if(keyword.length < word.length) {
        autoVergeKey = keyword+word.slice(0, (word.length-keyword.length));
    }
    for (var i = 0;i < word.length;i++) {
        encryptWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(autoVergeKey.charAt(i))) % alphabet.length);
    }
    $('#chiperText').html(encryptWord);
}

function decryptAutoVigenere(word,keyword) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var decryptWord = "";
    for (var i = 0;i < word.length;i++) {
        decryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(autoVergeKey.charAt(i))) % alphabet.length);
    }
    $('#chiperText').html(decryptWord);
}