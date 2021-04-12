function encryptVigenere(word,keyword) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encryptWord = "";
    word = word.replace(/\s/g, '');
    for (var i = 0;i < word.length;i++) {
        encryptWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    $('#chiperText').html(encryptWord);
}

function decryptVigenere(word,keyword) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var decryptWord = "";
    for (var i = 0;i < word.length;i++) {
        decryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    $('#chiperText').html(decryptWord);
}