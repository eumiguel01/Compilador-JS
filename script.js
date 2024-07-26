function compileCode() {
    const code = document.getElementById('codeInput').value;

    try {
        eval(code);

        document.getElementById('resultOutput').innerHTML = "Códdigo compilado com sucesso!";
    } catch (error) {
        document.getElementById('resultOutput').innerHTML = 'Erro ao compilar o código: ' + error.message;
    }
}