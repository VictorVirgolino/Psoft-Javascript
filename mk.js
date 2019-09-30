
function create_turma(disciplina, vagas){
	let turma = {};
	turma.disciplina = disciplina;
	turma.matriculados = [];

	turma.matricule = function(aluno) {
			if(turma.matriculados.length < vagas){
				turma.matriculados.push(aluno);
				return true;
			}
			else{
				return false;
			}
	}

	turma.vagasre = function(){
		return vagas - turma.matriculados.length;
	}

	turma.alunos = function(){
		return turma.matriculados;
	}

	return turma;

}

p = create_turma("Calculo", 2);
console.log(p.matricule("Joao"));
console.log(p.matricule("Maria"));
console.log(p.matricule("Nivea"));
console.log(p.alunos());
console.log(p.vagasre());


