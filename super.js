function alphabetOnly(text) {
    return text.replace(/[^a-zA-Z]+/g, '')
}

document.querySelector('#inputPlaintextFile').addEventListener('change', function(evt) {
    console.log('wkwkwwk');
    var files = evt.target.files;
    file = files[0];
    console.log(file);

    var reader = new FileReader();

    reader.onload = function(event) {
        $("#plainText").val(alphabetOnly(event.target.result.toLowerCase()));
    }

    reader.readAsText(file)
}, false);

function div(n,m) {
    return Math.floor(n / m);
}

function mod(n,m) {
    return ((n % m) + m) % m;
}

function encryptSuper(word,keyword) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encryptWord = "";
    word = word.replace(/\s/g, '');
    for (var i = 0;i < word.length;i++) {
        encryptWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }

    const output = [];
    const matrix = [];

    for (let i = 0; i < div(encryptWord.length, 4) + 1; i++) {
        const temp = [];
        for (let j = 0; j < 4; j++) {
        temp.push(encryptWord[i * 4 + j]);
        }
        matrix.push(temp);
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < div(encryptWord.length, 4) + 1; j++) {
        if (matrix[j][i] != null) output.push(matrix[j][i]);
        }
    }
    $('#chiperText').html(output);
}

function decryptSuper(word,keyword) {
    const output = [];
    const matrix = [];
    let index = 0;

    for (let i = 0; i < 4; i++) {
        let numRow = div(word.length, 4);
        if (i < mod(word.length, 4)) numRow++;

        const temp = [];
        for (let j = 0; j < numRow; j++) {
            temp.push(word[index]);
            index++;
        }

        matrix.push(temp);
    }

    for (let i = 0; i < div(word.length, 4) + 1; i++) {
        for (let j = 0; j < 4; j++) {
            if (matrix[j][i] != null) output.push(matrix[j][i]);
        }
    }
    console.log(output);

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var decryptWord = "";
    word = output.join('');
    for (var i = 0;i < word.length;i++) {
        decryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    $('#chiperText').html(decryptWord);
}