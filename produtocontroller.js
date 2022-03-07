const produtoController = {
    produto: [],
    addProduto: function(){
        var produto = new Produto;
        produto.nome = document.getElementById("nome").value;
        produto.tipo = document.getElementById("tipo").value;
        produto.cor = document.getElementById("cor").value;
        produto.marca = document.getElementById("marca").value;
        produto.quant = document.getElementById("quant").value;
        produto.valor = document.getElementById("valor").value;
        produto.texto = document.getElementById("texto").value;
        if(produto.add(produto) ){
            alert("produto adicionado!")
        }
        this.getALLproduto()
    },
    getALLproduto: function(){
        var produto = new Produto;
        this.produtos = produtos.getALL();
        var tabela = "<table class='table'><tr> <th> nome </th> <th> tipo </th> <ht> cor </th> <th> marca </th> <th> quant </th> <th> valor </th> <th> texto </th> </tr>";
        for(var index = 0; index < this.produtos.length; index++){
            tabela += "<tr> <td>" + this.produtos[index].nome + "</td><td>" + this.produtos[index].tipo + "</td> <td>" + this.produtos[index].cor
             + "</td> <td>" + this.produtos[index].marca + "</td> <td>" + this.produtos[index].quant +  "</td> <td>"+ this.produto[index].valor +  "</td> <td>" + this.produtos[index].texto + "</td> </tr>";
        }
        tabela += "</table>";
        document.getElementById("listaprodutos").innerHTML = tabela
    }
}