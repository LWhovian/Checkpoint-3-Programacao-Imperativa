let curso = require('./curso/index');
function Aluno(nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.totalFaltas = function () {
        this.faltas=+ 1;
    }
    this.media = function () {
        for (let i = 0; i < this.notas.lenght; i++){
            
            soma+= this.notas[i];
        }

        return soma / this.notas.lenght;
    }
}

let alunoA = new Aluno ('Lara', 2, [8, 9, 10]);
let alunoB = new Aluno ('Jean', 1, [10, 9, 10]);
let alunoC = new Aluno ('Ielison', 0, [9, 10, 10]);

curso.curso.novoEstudante(alunoA);
curso.curso.novoEstudante(alunoB);
curso.curso.novoEstudante(alunoC);

console.log(curso.curso.listDaVerdade());