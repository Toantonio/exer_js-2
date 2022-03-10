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
            this.valiData();
            var baseProduto = JSON.parse(localStorage.getItem('produtos'));
            if(baseProduto == null)
             baseProduto = [];
              
            baseProduto.push(produto);
            var produtosjson = JSON.stringify(baseProduto);
            localStorage.setItem('produtos', produtosjson);
            localStorage.setItem('atualizado', new Date);
            

        }catch (ex){
        console.error(ex)
        throw ex;
        // return false;
        }
    }
        getALL(){
            var listaproduto = JSON.parse(localStorage.getItem('produtos'));
            if (listaproduto == null){
                return []
            }
            return listaproduto;
       }
        //VALIDAR DADOS
       valiData(){
           var error = "";
            if(!this.nome || this.nome == "" ){
                error += "nome em branco!/n";
            }//
           var error = "";
            if(!this.tipo || this.tipo == "" ){
                error += "tipo em branco!/n";
            }//
           var error = "";
            if(!this.cor || this.cor == "" ){
                error += "cor em branco!/n";
            }//
           var error = "";
            if(!this.marca || this.marca == "" ){
                error += "marca em branco!/n";
            }//
           var error = "";
            if(!this.quant || this.quant == "" ){
                error += "quantidade não pode ficar zerado!/n";
            }//
           var error = "";
            if(!this.valor || this.valor == "" ){
                error += "valor em branco!/n";
            }//
           var error = "";
            if(!this.desc || this.desc == "" ){
                error += "descrição em branco!/n";
            }//
            if(error != ""){
                throw error;
            }
       }
       
}