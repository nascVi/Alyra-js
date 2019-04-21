

// initial state function
const uiState = () => {
    document.getElementById('stateMess').textContent = "Calculez votre factorielle ..."
}

function recAlgFact(num) {

    this.a = null

    if ((num + "").length === 0) throw "Aucun calcule à effectuer ?! "
    if (Number.isNaN( Number(num))) throw "Un entier naturel est un nombre positif ... "
    if (Number(num) < 0) throw "Le nombre doit être supérieur à 0."

    this.a = Number(num)
}


recAlgFact.prototype.calc = function() {
    if (this.a != null) {
        try {

            if (this.a === 0 || this.a === 1) return 1;
            else if (this.a === 2) return 2;
            //  Number.MAX_SAFE_INTEGER can be used to handle variable limits according to JS constraints

            let fact = 1
            console.log("Les résultats avant d'obtenir la factorielle sont: \n")
            for (let i = 2; i <= this.a; i++) {
                fact = fact * i
                console.log(i + " -> " + fact)
            //  Number.MAX_SAFE_INTEGER can also be used here
            }
            return fact
        } catch (err) {
            throw "Erreur de calcul: " + err
        }
    }
}


const factorialRen = () => {
    try {
        let f = new recAlgFact(dynFiche.numUser.value);
        document.getElementById('stateMess').textContent =  "La factorielle est: " + f.calc() ;
    } catch (err) {
        // Handle the none entry case
        document.getElementById('stateMess').textContent = err;
    }
}

