function encryptAffine(word,keyword, keyword2) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encryptWord = "";
    var encryptWord2 = "";
    word = word.replace(/\s/g, '');
    for (var i = 0;i < word.length;i++) {
        encryptWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    for (var i = 0;i < encryptWord.length;i++) {
        encryptWord2 += alphabet.charAt((alphabet.indexOf(encryptWord.charAt(i)) + alphabet.indexOf(keyword2.charAt(i % keyword2.length))) % alphabet.length);
    }
    $('#chiperText').html(encryptWord2);
}

function decryptAffine(word,keyword, keyword2) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var decryptWord = "";
    var decryptWord2 = "";
    for (var i = 0;i < word.length;i++) {
        decryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    for (var i = 0;i < decryptWord.length;i++) {
        decryptWord2 += alphabet.charAt(((alphabet.indexOf(decryptWord.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword2.charAt(i % keyword2.length))) % alphabet.length);
    }
    $('#chiperText').html(decryptWord2);
}