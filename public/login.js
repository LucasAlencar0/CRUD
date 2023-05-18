function fazerLogin() {
  const cpf = document.getElementById("cpf").value;
  const senha = document.getElementById("senha").value;

  fetch("pessoas")
    .then((response) => response.json())
    .then((data) => {
      //Busca as pessoas cujo nome e idade concidem com os valores digitados
      //Esse (p) seria o parametro do find (procurar) Função CallBack
      const pessoa = data.find((p) => p.cpfa === cpf && p.senha == senha);

      if (pessoa) {
        window.location.href = "bemVindo.html";
        // Armazenar o valor em localStorage
        localStorage.setItem("cpf", cpf);
      } 
      // else {
      //   alert("Cpf e senha não encontrados no banco de dados!!");
      // }
    });

  fetch("admins")
    .then((response) => response.json())
    .then((data) => {
      //Busca as pessoas cujo nome e idade concidem com os valores digitados
      //Esse (p) seria o parametro do find (procurar) Função CallBack
      const admin = data.find((p) => p.cpfa === cpf && p.senha == senha);

      if (admin) {
        window.location.href = "gerenciamento.html";
      } 
      // else {
      //   alert("Cpf e senha não encontrados no banco de dados!!");
      // }
    });
}

