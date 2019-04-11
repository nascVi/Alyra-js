// Initial state function 
const notifState = () => {
    document.getElementById('stateMess').textContent = "Est ou n'est pas un palindrôme..."
}


const trim = (str) => {
    let entStr = ""

    try {
    // 32 chars get replaced by an empty string for a no white space return
        for (var i = 0; i < str.length; i++) {
            entStr += str.charCodeAt(i) != 32 ? str.charAt(i) : ""
        }
        return entStr
        
    }
    catch (err) {
        document.getElementById('stateMess').textContent =  "Erreur : " + err.message
        return
    }
}


const palChecker = (str) => {
    try {
        // Handle non typical size entries
        const cicl = Math.floor(str.length/2)
        for (let i = 0; i < cicl; i++) {
            if (str.charCodeAt(i) != str.charCodeAt(str.length - i -1)) return false
        }
        // is a palindrome
        return true
    }
    catch (err) {
        document.getElementById('stateMess').textContent =  "Erreur : " + err.message
    }
    return false
}

const estPalindrome = () => {

    let str = fiche.entUser.value

    // No entry case
    if (str.length == 0) {
        document.getElementById('stateMess').textContent = "Vous n'avez rien saisi dans le champ texte !";
        return;
    }

    // trim function call
    str = trim(str);

    if (palChecker(str)) {
        document.getElementById('stateMess').textContent =  "C'est un palindrome !";
    }
    else {
        document.getElementById('stateMess').textContent =  "Ce n'est pas un palindrome ...";
    }
}
