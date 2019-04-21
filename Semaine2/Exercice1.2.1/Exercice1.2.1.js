'use strict'

let response = 1


const factoriel = (n) => {

    parseInt(n)
    let result = 1
    for (let i= n;i > 1;i--) {
        result *= i
    }
    if(n < 0) {
        result = console.log(n +" isn'a prime integer!")
    }

    console.log("Factorielle de "+n+" = " + result)
    return result
}

factoriel(0)
factoriel(23)
factoriel(-0) // can't handle the minus 0 case for now
factoriel(-3)
