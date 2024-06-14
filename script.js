const relogio = document.querySelector("#relogio")
const iniciar = document.querySelector("#iniciar")
const pausar = document.querySelector("#pausar")
const zerar = document.querySelector("#zerar")

const getTimeFromSeconds = (segundos) => {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC' //para nao considera o timezone de onde vc ta
    })
}

let timer

let segundos = 0
const iniciarRelogio = () => {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = getTimeFromSeconds(segundos)
    }, 1000) //a cada um segundo, é adicionado 1 segundo na variavel "timer"
}

iniciar.addEventListener('click', (e) => {
    e.preventDefault()
    relogio.classList.remove('pausado') //remove a classe pausado quando iniciar o timer
    clearInterval(timer) //garante que nao tem nenhum timer rodando
    iniciarRelogio()
})

pausar.addEventListener('click', (e) => {
    e.preventDefault()
    relogio.classList.add('pausado') //adiciona a classe pausado quando pausar o timer
    clearInterval(timer)//para o timer
})

zerar.addEventListener('click', (e) => {
    e.preventDefault()
    relogio.classList.remove('pausado') //remove a classe pausado quando zerar o timer

    clearInterval(timer)
    relogio.innerHTML = "00:00:00" //vai parar o timer e deixar com 00:00:00    
    segundos = 0
})
