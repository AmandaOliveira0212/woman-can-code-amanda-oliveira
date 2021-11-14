function validaMaioridade(anoNascimento) {

    anoNascimento = 2003;

    if (anoNascimento < 2003) {
        return ("Liberação autorizada");   //18+
    }
    else if (anoNascimento == 2003) {
        return ("Validar documento de identidade");   //18=
    } else {
        return ("ATENÇÃO: Liberação NÃO autorizada");    //18-
    }

}
const resultado = validaMaioridade();
console.log(resultado);