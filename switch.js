// Valor impresso no console: "Usuário logado"
autenticado = true;

switch (autenticado) {
    case true:
        console.log("Usuário logado");
        break;
    case false:
        console.log("Usuário não autenticado");
}

// Valor impresso no console: "Bem-vinda!"
sexo = "feminino";

switch (sexo) {
    case "feminino":
        console.log("Bem-vinda!");
        break;
    case false:
        console.log("Bem-vindo!");
}

// Valor impresso no console: "Outono"
mes = "Maio";

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!");
}

// Valor impresso no console: "Abril"
mes = 4;
nomeMes = "";

switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = "Mês inexistente";
}
console.log(nomeMes);

// Valor atribuído à variável salario: 2300
cargo = "gerente";
salario = 2000;

switch (cargo) {
    case "gerente":
        salario *= 1.15;
        break;
    case "supervisor":
        salario *= 1.10;
        break;
    default:
        salario *= 1.05;
}

var tipoUsuario = "Gerente";

switch (tipoUsuario) {
    case "Admin":
        mensagem = "*|*| Feliz Natal, chefe! |*|*";
        break;
    case "Gerente":
        mensagem = "Boas festas, meu amigo!";
        break;
    default:
        mensagem = "Boas festas!";
}

