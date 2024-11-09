// les fonction pures
let a = 10, b = 25;
function somme(n1,n2){
    return n1 + n2
}

let s = somme(a,b);
console.log(s);
s = somme(a,b);
console.log(s);s = somme(a,b);
console.log(s);

// fonction non pures

let compteur = 0;
function resultat(){
    return compteur += 1;
}
console.log(compteur);
resultat()
console.log(compteur);
resultat()
console.log(compteur);
resultat()
console.log(compteur);
