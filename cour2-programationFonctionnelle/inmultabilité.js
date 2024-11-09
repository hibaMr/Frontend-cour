let personne1 = {
    id:1,
    nom:"MRIBEH",
    prenom:"Hiba"
}

let personne2 = {...personne1}                  //{...} hadi kadire lina copier lhadac l'objet

personne2.nom = 'MOSSAID';

// console.log(personne1);
// console.log(personne2);

//2- objet.assign
let personne3 = Object.assign({},personne1);                        //hatina fi l'argument 1 li west assign nevaeu objet et fi l'argument 2 hetina fihe cheno b4ina nhoto west lobjet jdide li howa perssone1 nhetoha fi lobjet jdide
personne3.nom = 'ELADNANI';
console.log(personne1);
console.log(personne3);


//les tableaux
let etudiants = [
    {id:1 , nom:"MRIBEH",prenom:"Hiba",note:20},
    {id:2 , nom:"ELADNANI",prenom:"Naoual",note:19},
    {id:3 , nom:"KHALID",prenom:"Leila",note:17}
]

let stagiaires = [...etudiants];
stagiaires.push({id:4,nom:"MRIBEH",prenom:"MOHAMED",note:19})

//2éme methode :concat
let stg1 = etudiants.concat({id:4,nom:"MRIBEH",prenom:"MOHAMED",note:19})
console.log(stg1);