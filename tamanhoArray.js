function tamanhoArray(arr, tamanho){
    try {
        if (!arr && !tamanho){
            throw new ReferenceError("Envie os parâmetros");
        } else if (typeof arr !== "object"){
            throw new TypeError("Envie um array de tipo objeto");
        } else if(typeof tamanho !== "number"){
            throw new TypeError("Envie um número como tamanho")
        } else if(arr.length !== tamanho){
            throw new RangeError("Tamanho dado não corresponde ao tamanho do array");
        } else {
            return arr;
        }      
    } catch (e) {
        if (e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado"+e)
        }
    }
}

console.log(tamanhoArray('',4));