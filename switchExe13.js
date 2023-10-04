var agora = new Date();
var diaSem = agora.getDay();
/*
    0 = Domingo
    1 = Segunda
    2 = Terça 
    3 = Quarta
    4 = Quinta
    5 = Sexta
*/

// console.log(diaSem);
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda - Feira')
        break
    case 2:
        console.log('Terça - Feira')
        break
    case 3:
        console.log('Quarta - Feira')
        break
    case 4:
        console.log('Quinta - Feira')
        break
    case 5:
        console.log('Sexta - Feira')
        break
    default:
        console.log('[ERRO] Dia Inválido!')
        break
}

let signo = 'Leão';

switch (signo) {
  case 'Áries':
    console.log("De 21 março a 20 abril");
    break;
	case 'Touro':
    console.log("de 21 abril a 20 maio");
    break;
  case 'Gêmeos':
    console.log("de 21 maio a 20 junho");
    break;
  case 'Câncer':
    console.log("de 21 junho a 22 julho");
    break;
  case 'Leão':
    console.log("de 23 julho a 22 agosto");
    break;
  case 'Virgem':
    console.log("de 23 agosto a 22 setembro");
    break;
  default:
  	console.log("Signo não registrado");
    break;
}