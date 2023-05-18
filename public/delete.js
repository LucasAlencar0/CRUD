//Função para deletar dados do servidor
function deletarDados(){
    //Obtem o valor do campo input
    const cpf = document.getElementById('cpfa').value;

    fetch(`pessoas`)
    .then(response => response.json())
    .then(data =>{
        data.forEach(objeto => {
            if(objeto.cpfa === cpf){
                fetch(`pessoas/${objeto.id}`,{
                    method:'DELETE'
                })
            }
        })
    })
    location.reload();
}