function reverse_string(str){
    let reversed_str;
    reverse_string =str.split("");
    reverse_string =reverse_string.reverse()    
    reverse_string =reverse_string.join("");
    return reverse_string;
}

let nome=prompt("inserire un nome");
let nome_reverse=reverse_string(nome);

if(nome_reverse==nome){
    console.log("palindromo")
}else{
    console.log("nada")
}