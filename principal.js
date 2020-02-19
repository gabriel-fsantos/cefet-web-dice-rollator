// Faça seu exercício neste arquivo

// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

function rolar(){
    document.getElementById("recipienteResultados").classList.remove("oculto");
    var resultado = [];
    var dados = [];
    dados[0] = document.getElementById("quantidadeD4").value;
    dados[1] = document.getElementById("quantidadeD6").value;
    dados[2] = document.getElementById("quantidadeD8").value;
    dados[3] = document.getElementById("quantidadeD10").value;
    dados[4] = document.getElementById("quantidadeD12").value;
    dados[5] = document.getElementById("quantidadeD20").value;
    var pos = 0;
    //console.log(dados);
    for(i=0; i<6; i++){
        for(j=0; j<dados[i]; j++){
            switch (i) {
                case 0:
                    resultado[pos] = Math.ceil(Math.random() * 4);
                    pos++;
                    break;
                case 1:
                    resultado[pos] = Math.ceil(Math.random() * 6);
                    pos++;
                    break;
                case 2:
                    resultado[pos] = Math.ceil(Math.random() * 8);
                    pos++;
                    break;
                case 3:
                    resultado[pos] = Math.ceil(Math.random() * 10);
                    pos++;
                    break;
                case 4:
                    resultado[pos] = Math.ceil(Math.random() * 12);
                    pos++;
                    break;
                case 5:
                    resultado[pos] = Math.ceil(Math.random() * 20);
                    pos++;
                    break;
            }
        }
    }

    //console.log(resultado);
    var string = "";
    var soma = 0;
    for(var i=0; i<resultado.length; i++){
        if ((i+1)==resultado.length){
            string = string.concat(resultado[i], " = ");
        }else{
            string = string.concat(resultado[i], " + ");
        }
        soma += resultado[i];
    }
    string = string.concat(soma);
    //console.log(string);

    document.getElementById("resultado").innerHTML = string;
}