const btnCadstro = document.querySelector('#enviar');
const btnProximo = document.getElementById('proximo')
const btnLista = document.getElementById('verLista')

let lista = [];

class ficha{
    constructor(nome,sobrenome,idade,sexo,urgencia){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.sexo = sexo;
        this.urgencia = urgencia
    };
}

btnCadstro.addEventListener("click", function(e){
    e.preventDefault();

    pega_nome = document.querySelector('#nome');
    nome = pega_nome.value;
    pega_sobrenome = document.querySelector('#sobrenome');
    sobrenome = pega_sobrenome.value;
    pega_idade = document.querySelector('#idade');
    idade = pega_idade.value;
    pega_sexo = document.querySelector('#sexo');
    sexo = pega_sexo.value;
    pega_urgencia = document.querySelector('#urgencia');
    urgencia = pega_urgencia.value;

    let pessoa = new ficha (nome,sobrenome,idade,sexo,urgencia);

    if(pessoa.idade >= 75 || pessoa.urgencia == "muitoUrgente"){
        lista.unshift(pessoa);
    } else {
        lista.push(pessoa);
    }

    alert("Paciente Cadastrado");
    pega_nome.value = '';
    pega_sobrenome.value = '';
    pega_idade.value = '';
});

btnProximo.addEventListener("click",function(){
    if(lista[0] != null){
        window.alert(`Paciente ${lista[0].nome} ${lista[0].sobrenome} \n sala: 03`);
    } else {
        alert("Lista Vazia");
    }
    lista.shift();
});

let listaEspera = document.querySelector("#listaEspera");

btnLista.addEventListener("click", function(){
    listaEspera.innerHTML = '';
    lista.forEach((lista, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${lista.nome} - ${lista.sobrenome}`;
        listaEspera.appendChild(li);
    });

});







