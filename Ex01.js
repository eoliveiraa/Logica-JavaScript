
const cpf = '12345678901';
const cpfFormatado = formatarCPF(cpf);
console.log(cpfFormatado);



function formatarCPF(cpfDigitado) {

    return cpfDigitado.slice(0, 3) + '.' + cpfDigitado.slice(3, 6) + '.' + cpfDigitado.slice(6, 9) + '-' + cpfDigitado.slice(9);
}