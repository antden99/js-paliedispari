console.log("Tutto funziona");

//chiedo all'utente di inserire una parola tramite il prompt e la salvo in una variabile

const userWord = prompt("inserisci una parola");
console.log(userWord);

const list = [];

//creo un ciclo for che mi scorra la stringa inserita al contrario e la salvi in un array vuoto
for(i=userWord.length-1; i>=0;i--){
    const caract = userWord[i];
    console.log(caract);
    list.push(caract);
}

//creo un ciclo che mi controlla se la parola inserita è polindroma
for (let i = 0; i < userWord.length; i++) {
    if (list[i] != userWord[i]){
        console.log(list[i],userWord[i] + " la parola non è palindroma perchè questi caratteri sono diversi");
    } 
}