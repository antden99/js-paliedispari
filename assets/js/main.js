//console.log("Tutto funziona");

//chiedo all'utente di inserire una parola tramite il prompt e la salvo in una variabile

const userWord = prompt("inserisci una parola");
console.log(`la parola che hai inserito è: ${userWord}`);


/*creo un ciclo for che mi scorra la stringa inserita al contrario e la salvi in un array vuoto
for(i=userWord.length-1; i>=0;i--){
    const caract = userWord[i];
    console.log(caract);
    list.push(caract);
}

//creo un ciclo che mi controlla se la parola inserita è polindroma
for (let i = 0; i < userWord.length; i++) {
    if (list[i] != userWord[i]){
        value = true;
    } 
}
// controllo il valore della variabile boolena che uso per verificare 
if(value){
    console.log("la parola inserita non è palindroma");
} else {
    console.log("la parola inserita è palindroma");
}
*/

//creo la funzione che controlla se palindroma

function ceckIfPalindrome(word) {
    let value = false;
    const list = [];

    for (i = word.length - 1; i >= 0; i--) {
        const caract = word[i];
        //console.log(caract);
        list.push(caract);
    }

    for (let i = 0; i < word.length; i++) {
        if (list[i] != word[i]) {
            value = true;
        }
    }

    if (value) {
        console.log("la parola inserita non è palindroma");
    } else {
        console.log("la parola inserita è palindroma");
    }
}

console.log(ceckIfPalindrome(userWord));