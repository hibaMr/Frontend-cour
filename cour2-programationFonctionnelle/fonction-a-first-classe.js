// fonction de premiere classe et fonction d'order superieur
// fonction de premiere classe
// 1-stokage d'une fonction dans une variable

let a = 5 , b = 10;
let somme = function(n1,n2){
    return n1 + n2;
}

let s = somme(a,b);
console.log(s);

// fonction passé comme argumants à d'autres fonction
//exmple : map, filter, find.......

let etudiants = [
    {id:1 , nom:"MRIBEH",prenom:"Hiba",note:20},
    {id:2 , nom:"ELADNANI",prenom:"Naoual",note:19},
    {id:3 , nom:"KHALID",prenom:"Leila",note:17}
]
let stagiaires = etudiants.map(function(item){
    return {nom:item.nom,prenom:item.prenom};
});

console.log(stagiaires)

// 3- fonction de rappel (callback function)

function saluer(name){
    console.log("bonjour, " + name +"!");
}

//"setTimeout" prend une fonction comme argument
setTimeout(function(){
    return saluer("Hiba")
},1000);