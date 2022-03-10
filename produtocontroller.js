const produtocontroller = {
    produto: [],
    addProduto: function(){
        try{

            var produto = new Produto;
            produto.nome = document.getElementById("nome").value;
            produto.tipo = document.getElementById("tipo").value;
            produto.cor = document.getElementById("cor").value;
            produto.marca = document.getElementById("marca").value;
            produto.quant = parseInt(document.getElementById("quant")).value;
            produto.valor = parseFloat(document.getElementById("valor")).value;
            produto.desc = document.getElementById("desc").value;
            (produto.add(produto) );
                alert("produto adicionado!");
            
            this.getALLproduto();
        }catch(ex){
            alert(ex);
        }
    },
    getALLproduto: function(){
        var produto = new Produto;
        this.produtos = produto.getALL();
        var tabela = "<table class='table'><tr> <th>nome</th> <th>tipo</th> <th>Cor</th> <th>marca</th> <th>quant</th> <th>valor</th> <th>descroçao</th> </tr>";
        for(var index = 0; index < this.produtos.length; index++){
            tabela += "<tr> <td>" + this.produtos[index].nome + "</td><td>" + this.produtos[index].tipo + "</td> <td>" + this.produtos[index].cor + "</td> <td>" + this.produtos[index].marca + "</td> <td>" + this.produtos[index].quant +  "</td> <td>"+ this.produtos[index].valor +  "</td> <td>" + this.produtos[index].desc + "</td> </tr>";
        }
        tabela += "</table>";
        document.getElementById("lista-p").innerHTML = tabela
    },
    validRequere:function(){
        var campo = document.querySelectorAll(".required");
        var erros = document.querySelectorAll(".texterro");
        
        for (var index = 0; index < campo.length; index++){
            if(campo[index].value == ""){
                erros[index].style = "display: block";
            }else{
                erros[index].style = "display: none";
            }
        }
    }
}