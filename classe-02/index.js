const cpf = "12345678900";
const cnpj = "12345678900";
//console.log(cnpj.length)

//CNPJ Inválido
//const cnpj = "12345678000199";
//12.345.678/0001-99

const cpf = "12345678900";
const cnpj = "12345678000100";

if (cpf.length == 11) {
    formataCPF(cpf)
} else {
    console.log("CPF Inválido")
}

if (cnpj.length == 14) {
    formataCNPJ(cnpj)
} else {
    console.log("CNPJ Inválido")
}

function formataCPF(cpf) {
    console.log(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
}

function formataCNPJ(cnpj) {
    console.log(cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"))
}

