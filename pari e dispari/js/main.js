function numero_scelto(){
    let numero;
    do{
        numero =prompt("unserisci un numero");
    }while(isNaN(numero) || numero=="");
    return parseInt(numero);
}

function scelta_pari_o_dispari(){
    let scelta;
    do{
        scelta=prompt("unserisci la tua scelta");
        scelta.toUpperCase();
    }while(scelta!="pari" && scelta!="dispari");
    return scelta;
}

function numero_computers(){
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
}

function vincita(num1,num2,scelta){
    let somma = num1+num2;
    let flag=1;
    if(scelta=="pari"){
        flag=0;
    }
    if(somma%2==flag){
        return "ha vinto il giocatore";
    }else{
        return "ha vinto il pc";
    }
}

let numero_Giocatore=numero_scelto();
let scelta_giocatore=scelta_pari_o_dispari();
let numero_PC=numero_computers();
let vincitore=vincita(numero_PC,numero_Giocatore,scelta_giocatore);
console.log(vincitore);