function verificaXP(experiencia) {
    
    if(experiencia < 0) {
        return "Negativo";
    }

    experiencia /= 1000;
    const xp = Math.ceil(experiencia)

    switch (xp) {
        case 0:
        case 1:
            return "Ferro";
            break;
        case 2:
            return "Bronze";
            break;
        case 3:
        case 4:
        case 5:
            return "Prata";
            break;
        case 6:
        case 7:
            return "Ouro";
            break;
        case 8:
            return "Platina";
            break;
        case 9:
            return "Ascendente";
            break;
        case 10:
            return "Imortal";
            break;
        default:
            return "Radiante";
            break;
    }
}

function mensagemFinal(rankHeroi, nomeHeroi) {
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${rankHeroi}`)
}

function init() {
    const nomeHeroi = "O Cara";
    let experienciaHeroi = -10000;
    const rankHeroi = verificaXP(experienciaHeroi);
    mensagemFinal(rankHeroi, nomeHeroi);

}

init();