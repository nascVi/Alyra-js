// init function
function init() {
    document.getElementById('feedbackText').textContent = "Est ou n'est pas un palindrôme...";
}


function trim(str) {
    var newStr = "";

    try {
        // white space removal
        for (var i = 0; i < str.length; i++) {
            newStr += str.charCodeAt(i) != 32 ? str.charAt(i) : "";
        }
        return newStr;
    }
    catch (err) {
        document.getElementById('feedbackText').textContent =  "Erreur : " + err.message;
        return;
    }
}

function testPalindrome(str) {
    try {
        // i will scroll half of the sentence
        var scroll = Math.floor(str.length/2); // rounding down for dealing with odd size text
        for (var i = 0; i < scroll; i++) {
            if (str.charCodeAt(i) != str.charCodeAt(str.length - i -1)) return false;
        }
        return true; // palidrome
    }
    catch (err) {
        document.getElementById('feedbackText').textContent =  "Erreur : " + err.message;
    }
    return false;
}

function isItAPalindrome() {

    // init
    var str = laForm.aText.value;

    // check input
    if (str.length == 0) {
        document.getElementById('feedbackText').textContent = "Vous n'avez rien saisi dans le champ texte !";
        return;
    }

    // trim all white spaces
    str = trim(str);

    if (testPalindrome(str)) {
        document.getElementById('feedbackText').textContent =  "C'est un palindrome !";
    }
    else {
        document.getElementById('feedbackText').textContent =  "Ce n'est pas un palindrome ...";
    }
}
