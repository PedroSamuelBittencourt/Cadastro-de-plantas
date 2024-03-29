

function cadastro(){
    console.log("oi");
    let form = document.getElementById("form-cadastro")
    let nome = form.nome.value
    let especie = form.especie.value
    let altura = form.altura.value
    if(nome.trim() == ""){
        alert("Preencha o nome")
        return false
    }
    if(especie.trim() == ""){
        alert("Preencha a Espécie")
        return false
    }
     document.getElementById('planta').innerHTML = "Cadastrado com sucesso"
}
