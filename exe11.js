var idade = 27
console.log(`Você tem ${idade} anos...`)
if(idade >= 18){
    console.log('Voto Obrigatorio')
} else if (idade >= 16 && idade < 18 || idade > 65){
    console.log('Voto opcional')
}
else {
    console.log('Não Vota')
}