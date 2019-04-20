
// variable for the heighest transaction amount
let maxDs = 6000

// transactions characterized by arrays
let trCase = new Array()

// Onload State function
const uiState = () => {

    // Sort the transaction in an array
    trCase[0] = new Array(2000,13000)
    trCase[1] = new Array(6000,9000)
    trCase[2] = new Array(800,2000)
    trCase[3] = new Array(700,1500)
    trCase[4] = new Array(1200,3500)
    trCase[5] = new Array(1000,2800)
    trCase[6] = new Array(1300,5000)
    trCase[7] = new Array(600,1500)

    try {
        exhausRen()
    } catch (err) {
        document.getElementById('tsView').textContent = err
    }

    document.getElementById('tsView').textContent = dsRendr
}


// Time tool
let startTStp, endTStp
const startTSRen = () => {
    startTStp = new Date()
}

const endTSRen = () => {
    endTStp = new Date()
    let msDiff = endTStp - startTStp
    rendr("Process time: " + Math.round(msDiff/1000) + " secondes et " + msDiff + " ms")
}


// Favoring the exhaustive approach
let bestTip = 0
let bestTr = new Array()

const exhausRen = () => {
    rendr("\n")
    startTSRen()

    let ctr = ""
    for (i=0 ; i<trCase.length ; i++ ) { ctr += i + "" }
    
    let mixMatch = matchTr(Array.from(ctr.split('')))
    for (s of mixMatch) satoshisSum(s)

    rendr(mixMatch.length + " Estimations: ")
    let bitsSum = 0
    for (i=0 ; i < bestTr.length ; i++)  {
        rendr(" trCase(" + i + ") : " + bestTr[i])
        bitsSum += bestTr[i][0]
    }
    rendr("\n Le meilleurs pourboire à " + bestTip + " satoshis, est obtenu avec un cumule de " + bestTr.length + " transactions, pour un block de "  + bitsSum + " octets.")
    endTSRen()
}


const matchTr = (a) => { 
    let f = function(n, source, en_cours, total) {
        if (n == 0) {
            if (en_cours.length > 0) {
                total[total.length] = en_cours
            }
            return
        }

        for (let j = 0; j < source.length; j++) {
            f(n - 1, source.slice(j + 1), en_cours.concat([source[j]]), total)
        }
        return
    }

    let t = []
    for (let i=0; i < a.length; i++) {
        f(i, a, [], t)
    }

    t.push(a)
    return t
}   

// cumul les satochis des trCase dans l'ordre, jusqu'à la limite du block
const satoshisSum = (ts) => {
    
    // uiState
    let tipsAmount = 0
    let bitsAmount = 0
    let trOut = new Array()
    let cTr = 0

    // Each transaction
    for (i=0 ; i < ts.length ; i++)  {
        let x = ts[i]

        if (bitsAmount + trCase[x][0] <= maxDs) {
            bitsAmount += trCase[x][0]
            tipsAmount += trCase[x][1]                
            cTr++
            trOut.push(trCase[x])
        } else {
            break
        }
    }

    // The best transaction out
    if (tipsAmount > bestTip) {
        bestTip = tipsAmount
        bestTr = trOut
    }

}

let dsRendr = ""
const rendr = (txt) => {
    console.log(txt)
    dsRendr += "\n" + txt
}


