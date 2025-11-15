const express = require('express');
const app = express();

const estudantes = [
    {id: 1, nome: 'Guilherme', idade: 16},
    {id: 2, nome: 'Juliana', idade: 17},
    {id: 3, nome: 'Arthur', idade: 16},
    {id: 4, nome: 'Stephan', idade: 16},
    {id: 5, nome: 'Jefferson', idade: 16},
    {id: 6, nome: 'Jonnas', idade: 16},
    {id: 7, nome: 'Alisson', idade: 17},
    {id: 8, nome: 'Karyne', idade: 16}
]

app.get('/estudante/:id', (req, res) => {
    let id = req.params.id;
    let estudante = estudantes[id - 1];
    if(estudante){
        res.send('Nome: ' + estudante.nome + " Idade: " + estudante.idade)
    }else{
        res.send('Estudante não encontrado')
    }
    
});

app.listen(3000, () => {
    console.log('Servidor em execução: http://localhost:3000')
});