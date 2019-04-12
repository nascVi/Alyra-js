// Initial state function
const notifState = () => {
    document.getElementById('stateMess').textContent = "Entrez la valeur ..."
}

function Cercle(r) {

    this.rayon = null

    if ((r+"").length === 0) throw "Rien de votre côté !?"
    if (Number.isNaN( Number(r))) throw "Je ne calcule qu'à partir d'un nombre!"
    if (Number(r) < 0) throw "Un nombre positif sera valide!"

    this.rayon = Number(r)
}

Cercle.prototype.aire = function() { if (this.rayon != null) return Math.PI * Math.pow(this.rayon,2) }

Cercle.prototype.périmetre = function() { if (this.rayon != null) return 2 * Math.PI * this.rayon }

const getGeomCalcs = () => {
    try {
        var c = new Cercle(dynFiche.uRayon.value)
        document.getElementById('stateMess').textContent =  "L'aire de votre cercle est de: " + c.aire().toFixed(2) + " cm2 - Le périmètre: " + c.périmetre().toFixed(2) + " cm"
    } catch (err) {
        document.getElementById('stateMess').textContent = err
    }
}