const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const[alunos, medias] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`A média do(a) ${aluno} é de ${mediaDoAluno}!`);

    } else {
        console.log(`Aluno(a) ${aluno} não encontrado!`);
    }
}

exibeNomeENota("João");
exibeNomeENota("Douglas");