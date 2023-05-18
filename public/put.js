function atualizarDados() {
    const cpfa = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const cargo = document.getElementById('cargo').value;
    const contratacao = document.getElementById('contratacao').value;
    const nome = document.getElementById('nome').value;
    const objetivos = document.getElementById('objetivos').value;
    const pontosFortes = document.getElementById('pontos-fortes').value;
    const pontosMelhoria = document.getElementById('pontos-melhoria').value;
    const sugestoes = document.getElementById('sugestoes').value;
    const observacoes = document.getElementById('observacoes').value;
    

    fetch(`pessoas`)
    .then(response => response.json())
    .then(data =>{
        data.forEach(objeto => {
            if(objeto.cpfa === cpfa){
                fetch(`pessoas/${objeto.id}`,{
                 method: "PUT",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify({senha:senha, cpfa:cpfa, nome:nome, cargo: cargo, contratacao: contratacao, objetivos: objetivos, pontosFortes: pontosFortes, pontosMelhoria: pontosMelhoria, sugestoes: sugestoes, observacoes: observacoes}),
                }).then((response) => response.json());
            }
        })
    })

    location.reload();
   }

   function atualizarDado() {
    const cpfa = document.getElementById('cpfa').value;
    const senha = document.getElementById('senha').value;
    const cargo = document.getElementById('cargo').value;
    const contratacao = document.getElementById('contratacao').value;
    const nome = document.getElementById('nome').value;
    const objetivos = document.getElementById('objetivos').value;
    const pontosFortes = document.getElementById('pontos-fortes').value;
    const pontosMelhoria = document.getElementById('pontos-melhoria').value;
    const sugestoes = document.getElementById('sugestoes').value;
    const observacoes = document.getElementById('observacoes').value;
    
    fetch(`pessoas`)
    .then(response => response.json())
    .then(data =>{
        data.forEach(objeto => {
            if(objeto.cpfa === cpfa){
                fetch(`pessoas/${objeto.id}`,{
                 method: "PUT",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify({senha:senha, cpfa:cpfa, nome:nome, cargo: cargo, contratacao: contratacao, objetivos: objetivos, pontosFortes: pontosFortes, pontosMelhoria: pontosMelhoria, sugestoes: sugestoes, observacoes: observacoes}),
                }).then((response) => response.json());
            }
        })
    })

    location.reload();
   }