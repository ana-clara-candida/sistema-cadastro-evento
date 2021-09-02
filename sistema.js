//Criando o módulo para leitura dos inputs de usuário
const readline = require ("readline")
//Criando a interface para a leitura dos inputs
let rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
})
//Criando a constante com o nome dos palestrantes
const listaDePalestrantes = ["Palestrante A", "Palestrante B", "Palestrante C"]
// Criando a função para o usuário conseguir digitar a data novamente caso ela seja inválida
function dataAnterior(){
    //Criando a pergunta e a função de callback para o input do nome do evento
    rl.question("Informe o nome do evento \n", function(evento){
        //Criando a variável que pegará o nome do evento
        let nomeDoEvento = evento
        //Criando a pergunta e a função de callback para o input da data
    rl.question("Informe a data do evento no formato AAAA-MM-DD: \n", function(data) {
        //Criando a variável que vai pegar o input
        let dataDoEventoString= data;
        //Criando a variável que vai converter o input de string para data
        let dataDoEvento = new Date(dataDoEventoString)
        //Colocando a variável da data atual
        let dataAtual = new Date ()
        //Criando a condição que vai comparar a data atual com a data inserida; Se a data do evento for posterior à data atual...
        if (dataDoEvento > dataAtual){
            //...Retorne ok no console e continue normalmente
            console.log("ok \n")
            //Se não...
        }else{
            //...Retorne uma mensagem de erro no console
            console.log("Erro: A data informada é inválida")
            //E volte para o começo
            dataAnterior()
        }
        //Criando outra pergunta com função de callback, só que dessa vez, para ler o input da idade do participante
    rl.question("Informe a idade do participante: \n", function(idade){
        //Criando a variável que vai pegar o input
        let idadeParticipante = idade
        //Criando a condição que vai verificar a idade do participante; Se a idade do participante for maior ou igual a 18...
        if (idadeParticipante >=18){
            //..Retorne cadastro autorizado no console e continue normalmente
            console.log("Cadastro autorizado")
        //Se não...
        }else{
            //...Retorne uma mensagem de erro no console
            console.log("Erro: O participante deverá ser maior de idade")
            //E pare a execução
            rl.close()            
        }
        //Criando a lista de participantes
        let listaDeParticipantes = []
        //Criando a pergunta e a função de callback que vai pegar o nome do participante
        rl.question("Informe o nome do participante: \n", function(nomeDoParticipante){
            //Criando a condição que vai verificar o número de participantes na lista; Se o comprimento da lista de participantes for menor do que 100...
            if(listaDeParticipantes.length < 100){
                //...Ponha o nome inserido na lista de participantes
                listaDeParticipantes = nomeDoParticipante
                //E retorne a mensagem de cadastro realizado com sucesso
                console.log("Cadastro realizado com sucesso!")
                //Se não...
            }else{
                //Retorne uma mensagem de erro
                console.log("Erro: Esse evento já atingiu o número máximo de participantes")
            }
            //Depois, Retorne a lista de palestrantes e participantes
            console.log(`Essa é a lista de palestrantes e participantes do evento ${nomeDoEvento}: \n ${listaDePalestrantes} \n ${listaDeParticipantes}`)
            //Fechando o input
            rl.close()
        })
    })
    })
    })
}
//Chamando a função que criei anteriormente
dataAnterior()