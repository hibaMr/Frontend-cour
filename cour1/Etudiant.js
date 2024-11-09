import Etudiant from "./etudiants.js";

let etudiant1 = new Etudiant(1,"MRIBEH","Hiba");
let etudiant2 = new Etudiant(1,"ELADNANI","Naoual");

console.log(etudiant1.nom);
console.log(etudiant1["nom"]);
console.log(etudiant1.presentez_vous());

//templaite litteral:
let salution = `welcome ${etudiant1.nom} ${etudiant2.prenom} ` 

//operateur conditionnel ternaire
let note = 9;
let decision = note > 10 ? 'Admis' : 'Redoublant';
console.log(decision);

let estAdmis = true;

let niveau = estAdmis ? "2 eme annee " : "1 ere annee"
//let niveau = estAdmis == true ? "2 eme annee " : "1 ere annee"

//Deconstuction d'un objet -- abject destructing
let personne = {id:1,nom:'meriem',prenom:'feyd'} 

let Vnom = personne.nom ;
let {id , nom, prenom} = personne;
console.log(nom);

// exercice

let personne1 = {id:1,nom:'meriem',prenom:'feyd'} 

function salutation({nom,prenom}){
    return `bonjour ${nom} ${prenom}`;
}


console.log(salutation(personne));

// exercice2
let  stagiaires = [
    {id:1,nom:"MRIBEH",prenom:"Hiba",note:19},
    {id:2,nom:"ELADNANI",prenom:"Naoual",note:16},
    {id:3,nom:"FEYD",prenom:"Meryem",note:9}
]

let listStagiaire = stagiaires.map(function(item){
    if(item.note<10){

    }
})

let listecomplet = stagiaires.map(function(item){
     
    let nomcomplet= item.nom+" "+item.prenom;

    let decision = item.note > 10 ? 'Admis' : 'Redoublant';

    return nomcomplet+ " "+decision+ " "+item.note

})







