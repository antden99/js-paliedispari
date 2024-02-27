//console.log("Tutto funziona");

//chiedo all'utente di inserire una parola tramite il prompt e la salvo in una variabile

//const userWord = prompt("inserisci una parola");
//console.log(`la parola che hai inserito è: ${userWord}`);


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

/*creo la funzione che controlla se palindroma

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
*/




//////////////////////////////////////////////////////////////////////////////////////////////

//chiedo all'utente di scegliere pari o dispari
let userSign = prompt("Scegli: Pari o dispari?");
userSign = userSign.toLowerCase(); //trasformo la stringa inserita in minuscolo per non avere problemi
console.log(`L'utente ha scelto segno: ${userSign}`);

//chiedo all'utente di inserire un numero da 1 a 5
const userNumb = prompt("Scegli un numero da 1 a 5");
console.log(`L'utente ha scelto il numero: ${userNumb}`);



function evenOrOdd(sign,numb){


//calcolo un numero random da 1 a 5 per il pc
const pcRandomNumb = Math.floor(Math.random() * 5)+1;
console.log(`Il PC ha scelto il numero: ${pcRandomNumb}`);


//faccio la solla tra il numero dell'utente ed il numero randomico generato
sum = Number(numb) + pcRandomNumb;
console.log(`il risultato è: ${sum}`);

if ( sum % 2 == 0 && sign == "pari"){
    console.log("numero pari ha vinto l'utente");
} else if ( sum % 2 !=0 && sign == "dispari"){
    console.log("numero dispari ha vinto l'utente");
} else {
    console.log("mi dispiace ma ha vinto il computer, riprova");
}


}

console.log(evenOrOdd(userSign,userNumb));

