AOS.init();

const dataDoEvento = new Date("Dec 07, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contasAsHoras = setInterval(function() {
    const horaAtual = new Date();
    const timeStampAtual = horaAtual.getTime();

    const distanciaAteOEvento= timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    const tempoFinal = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    document.getElementById('contador').innerHTML = tempoFinal;
    
    if(distanciaAteOEvento < 0){
        clearInterval(contasAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`
    }
}, 1000);
