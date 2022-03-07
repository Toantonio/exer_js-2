class Produto{
    constructor(){
        this.nome = "";
        this.tipo ="";
        this.cor = "";
        this.marca = "";
        this.quant = 0;
        this.valor = 0;
        this.texto = ""
    };
    add(produto){
        try{
            var baseProduto = [];
            baseProduto = JSON.parse(localStorage.getItem('produto'));
            baseProduto.push('produto');

            var produtosjson = JSON.stringify(baseProduto);
            localStorage.setItem('produto', produtosjson);
        }catch (ex){
        console.error(ex)
        return false;
        }

        getALL(){
            return JSON.parse(localStorage.getItem('produtos'));
        }
}