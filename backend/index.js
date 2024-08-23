const express = require('express');
const app = express();
app.use(express.json());

let alunos = [];

app.post('/alunos', (req, res) => {
    const { nome, notas, frequencia } = req.body;

    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    alunos.push({ nome, notas, frequencia, media });
    res.status(201).send('Aluno adicionado com sucesso!');
});

app.get('/alunos', (req, res) => {
    const mediasDisciplinas = [0, 0, 0, 0, 0];
    let totalAlunos = alunos.length;

    alunos.forEach(aluno => {
        aluno.notas.forEach((nota, index) => {
            mediasDisciplinas[index] += nota;
        });
    });

    const mediaTurma = mediasDisciplinas.map(nota => nota / totalAlunos);

    const alunosAcimaMedia = alunos.filter(aluno => aluno.media > mediaTurma.reduce((acc, cur) => acc + cur, 0) / mediaTurma.length);
    const alunosAbaixo75 = alunos.filter(aluno => aluno.frequencia < 75);

    res.json({
        alunos,
        mediaTurma,
        alunosAcimaMedia,
        alunosAbaixo75
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
