
function incrementer(){
    let x = 0;                              //hena derna hade variale weste function bache tkone 3adna function pures
    return function(){                          //hena derna hade function bache tb9a tzade lina hite ila jina o derna x+=1 4adi tb9a t3etina 4ire 1 fi kole t3eyita
        return x+=1;
    }
}
let compteur = incrementer();
console.log(compteur());
console.log(compteur());
console.log(compteur());
console.log(compteur());