const formata = n => {
    return ('0' + n).slice(-2)
}

const diaMes = setInterval(() => {
    const now = new Date();

    const dataHora = formata(now.getUTCDate()) + '/' +
    formata((now.getUTCMonth() + 1)) + '/' +
    now.getUTCFullYear(); 

    document.querySelector('[data-type="diaMesAno"]').innerHTML = dataHora

}, 1000)


function contarDias(dataFinal) {
    var dataInicial = new Date();
    var dataFinal = new Date(dataFinal);
  
    var diferencaTempo = Math.abs(dataFinal.getTime() - dataInicial.getTime());
    var diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
  
    console.log(diferencaDias + ' dias');
    return diferencaDias
}

var contador = contarDias('2023-12-31');  
document.querySelector('[data-type="contagem"]').innerHTML = contador ;



const horasFuso = setInterval(() => {

    const options = {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        minute: 'numeric'
    };
    const date = new Intl.DateTimeFormat([], options);
    // console.log(date.format(new Date()));

    document.querySelector('[data-type="horas"]').innerHTML = date.format(new Date())

}, 1000)



// const horasSemFuso = setInterval(() => {

//     const now = new Date();
//     const Hora = formata(now.getHours()) + ":" + formata(now.getMinutes()); 

//     document.querySelector('[data-type="horasSemfuso"]').innerHTML = Hora

// }, 1000)


