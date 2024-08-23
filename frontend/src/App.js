import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [nome, setNome] = useState('');
    const [notas, setNotas] = useState([0, 0, 0, 0, 0]);
    const [frequencia, setFrequencia] = useState(0);
    const [alunos, setAlunos] = useState([]);

    const handleAddAluno = async () => {
        await axios.post('http://localhost:3000/alunos', { nome, notas, frequencia });
        fetchAlunos();
    };

    const fetchAlunos = async () => {
        const response = await axios.get('http://localhost:3000/alunos');
        setAlunos(response.data.alunos);
    };

    return (
        <div>
            <h1>Gerenciamento de Alunos</h1>
            <input type="text" placeholder="Nome do aluno" value={nome} onChange={e => setNome(e.target.value)} />
            {notas.map((nota, index) => (
                <input
                    key={index}
                    type="number"
                    value={nota}
                    onChange={e => {
                        const newNotas = [...notas];
                        newNotas[index] = Number(e.target.value);
                        setNotas(newNotas);
                    }}
                />
            ))}
            <input type="number" placeholder="Frequência" value={frequencia} onChange={e => setFrequencia(Number(e.target.value))} />
            <button onClick={handleAddAluno}>Adicionar Aluno</button>

            <h2>Alunos</h2>
            {alunos.map((aluno, index) => (
                <div key={index}>
                    <p>{aluno.nome}: Média: {aluno.media}, Frequência: {aluno.frequencia}%</p>
                </div>
            ))}
        </div>
    );
}

export default App;
