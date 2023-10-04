var nomes = ['Cleyton', 'Jennifer', 'Bryan', 'Tyler']
console.log(nomes);
function verificarNome(){
    switch(nomes){
        case "cleyton":
            console.log('Cleyton nasceu em fevereiro de 1994 e tem 29 anos')
            break
        case "Jennifer":
            console.log('Jennifer nasceu em marça de 1993 e tem 30 anos')
            break
        case "Bryan":
            console.log('Bryan nasceu em agosto de 2023 e tem 2 mêses')
            break
        case "Tayler":
            console.log('Tayler nasceu em abril de 2022 e tem 1 e 6 meses')
            break
        default:
            console.log('[ERRO] Dia Inválido!')
            break
    }
}
