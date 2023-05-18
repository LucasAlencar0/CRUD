//Função que envia dados para o servidor
function enviarDados(){
    //Obter os valores do input
    const nome = document.getElementById("nome").value;
    const cpfa = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;
    const contratacao = document.getElementById("contratacao").value;
    const cargo = document.getElementById("cargo").value;
    const objetivos = document.getElementById("objetivos").value;
    const pontosFortes = document.getElementById("pontos-fortes").value;
    const pontosMelhoria = document.getElementById("pontos-melhoria").value;
    const sugestoes = document.getElementById("sugestoes").value;
    const observacoes = document.getElementById("observacoes").value;

    //Envia os dados para o servidor utilizando o método fetch ()
    fetch(`pessoas`,{
        method: 'POST', //Método HTTP utilizado (POST)
        //Headers é um objeto de requisição HTTP que insere no JSON as informações
        headers:{
            'Content-Type':
            'application/json'//Tipo de conteudo enviado(JSON)

        },
        //body é um objeto JS que foi convertido para JSON. Usando o método JSON.striguify. Enviando no formato JSON
        body: JSON.stringify({nome: nome, contratacao: contratacao, cargo: cargo, objetivos: objetivos, pontosFortes: pontosFortes, pontosMelhoria: pontosMelhoria, sugestoes: sugestoes, observacoes: observacoes, senha: senha, cpfa: cpfa})
    })
    //Converte a resposta para JSON
    .then(response => response.json());

    location.reload();
}
