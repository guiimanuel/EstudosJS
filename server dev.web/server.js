const express = require('express');
const app = express();

app.get('/adicao/:numeroA/:numeroB', (req, res) => {
    let numeroA = parseInt(req.params.numeroA);
    let numeroB = parseInt(req.params.numeroB);
    let resultadoAdi = numeroA + numeroB;

    res.send('Resultado = ' + resultadoAdi.toString());
});

app.get('/subtracao/:numeroAsub/:numeroBsub', (req, res) => {
    let numeroAsub = parseInt(req.params.numeroAsub);
    let numeroBsub = parseInt(req.params.numeroBsub);
    let resultadoSub = numeroAsub - numeroBsub;

    res.send('Resultado = ' + resultadoSub.toString());
});


app.listen(8280, () => {
    console.log('Servidor em execução...');
})