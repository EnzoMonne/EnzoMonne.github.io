function mostrarHora(){
    let horaatual = new Date();
    console.log(horaatual);
}
mostrarHora();

function calcularAreaRetangulo (largura, altura){
    let area = largura*altura;
    console.log (area);
}
calcularAreaRetangulo(5,6);

function ehPar (numero){
    if(numero%2==0)
    return `O numero ${numero} é par`;
    else
    return `O numero ${numero} é impar`;
}
console.log(ehPar(2));

function avaliarAluno(nome,n1,n2,n3){
    function calcularMedia(n1, n2, n3) {

        return (n1 + n2 + n3) / 3;
        
    }

    let media = calcularMedia(n1, n2, n3);

    function verificarSituacao(media) {

        if (media >= 7) return "Aprovado";
        
        else return "Reprovado";
    
        
    }

    console.log(`Nome: ${nome} - Média: ${media.toFixed(2)} - Situação: ${verificarSituacao(media)}`);

}
avaliarAluno('Enzo',8,6,10);

function conversorTemperatura(celsius){
    let fahrenheit = (celsius*1.8)+32;

    return `A temperatura de ${celsius}°C representa ${fahrenheit} °F`;
}
conversorTemperatura (100);

function gerarSenhaAleatoria(){
    
        function createRandomString(length) {
            
            
            let result = "";
            for (let i = 0; i < length; i++) {
            result += caractereAleatorio (i);
            return result;
          }
          
        }
        function caractereAleatorio(){
            const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@[]/";
            const n = Math.trunc(Math.random()*66); 
            return caracteres[n];
        }
        
    return createRandomString(length);

}
console.log(gerarSenhaAleatoria(8));