function tratarErro(erro) {
    //throw new Error("...");
    //throw 10;
    //throw true;
    //throw "Mensagem";
}

function imprimirNome(obj) {
    try{    
        console.log(obj.name.toUpperCase() + "!!!!")
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log("Final");
    }
}

const obj = {nome: "Roberto"}
imprimirNome(obj);