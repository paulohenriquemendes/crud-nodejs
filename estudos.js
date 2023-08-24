console.log("Hellos!");

/*
Comentários
*/

const x = (...params)=>{
    console.log(...params);
} 

//x("Texto passado por parâmetro", "sds");

const calcularFatorial = (numero) => {
    if (numero == 0 || numero == 1){
        return 1;
    }else{
        return numero * calcularFatorial(numero - 1);
    }
}

const numero = 9;
const fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`);