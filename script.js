function criarAluno(nome,n1,n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = function (){
        return (this.nota1 + this.nota2) /2
    }
}
 
 
var aluno1 = new criarAluno ('lucas', 8,9);
var aluno2 = new criarAluno ('pedro', 5,6);
var aluno3 = new criarAluno ('joao', 10,4);
var aluno4 = new criarAluno ("bianca", 5, 8)
 
console.log(aluno4.nome)
console.log(aluno4.media())