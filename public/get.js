
function buscarDados() {
  const cpf = localStorage.getItem("cpf");

  if(cpf){
    fetch(`pessoas/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpfa === cpf)
        if(pessoaEncontrada){
            document.getElementById('nome').value = pessoaEncontrada.nome
            document.getElementById('cpf').value = pessoaEncontrada.cpfa
            document.getElementById('senha').value = pessoaEncontrada.senha
            document.getElementById('contratacao').value = pessoaEncontrada.contratacao
            document.getElementById('cargo').value = pessoaEncontrada.cargo
            document.getElementById('objetivos').innerHTML = pessoaEncontrada.objetivos
            document.getElementById('pontos-fortes').innerHTML = pessoaEncontrada.pontosFortes
            document.getElementById('pontos-melhoria').innerHTML = pessoaEncontrada.pontosMelhoria
            document.getElementById('sugestoes').innerHTML = pessoaEncontrada.sugestoes
            document.getElementById('observacoes').innerHTML = pessoaEncontrada.observacoes
         
        }
        else{
          alert("pessoa não encontrada")
        }
      });
  }
  
  }

  // Chama a função retorno ao carregar a página
window.addEventListener("load", buscarDados);
//Consegue melhorar esse código?
// const cpf = localStorage.getItem("cpf");



