// Modules en js

class Etudiant{
    constructor(id,nom,prenom){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }

    presentez_vous(){
        return "I'm " + this.nom + " " + this.prenom
    }
}

export default Etudiant;