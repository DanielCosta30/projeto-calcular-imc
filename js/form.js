var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //extraindo informações do paciente do form

    var paciente = ObtemInformacoesFormulario(form);


    // cria a tr e td do paciente
    var pacienteTr = MontarTr(paciente);

    // mensagem erro

    var error = validaPaciente(paciente);

    //validar dados

    if (error.length > 0){

    return;
    }

    // adicionando paciente na tabela

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function ObtemInformacoesFormulario(form){

     var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
        

    }

    return paciente;

}

function MontarTr (paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montarTd (dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td; 

}

function validaPaciente(paciente){

    if(validaPeso(paciente.peso)){
        return "";
    } else {
        return "O peso é inválido";
    }
    
}