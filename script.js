


const clicou=()=>{
const sliders = document.querySelector('#sliders')
const button = document.querySelector('.ponto')
const button2 = document.querySelector('.ponto2')
const button3 = document.querySelector('.ponto3')
const banner = document.querySelector('.banner')


banner.setAttribute('style','background-image: url(./complementos/bg.jpg);')

button.classList.add('active')

button2.setAttribute('class','ponto2')

button3.setAttribute('class','ponto3')

sliders.setAttribute('style','margin-left:0')


}

const clicou2=()=>{
    const sliders = document.querySelector('#sliders')
    const button = document.querySelector('.ponto')
    const button2 = document.querySelector('.ponto2')
    const button3 = document.querySelector('.ponto3')
    const banner = document.querySelector('.banner')


banner.setAttribute('style','background-image: url(./complementos/foto4.jpg);')

    button.setAttribute('class','ponto')

    button2.classList.add('active')
    
    button3.setAttribute('class','ponto3')

    sliders.setAttribute('style','margin-left:-100vw')
    
    }

const clicou3=()=>{
        const sliders = document.querySelector('#sliders')
        const button = document.querySelector('.ponto')
        const button2 = document.querySelector('.ponto2')
        const button3 = document.querySelector('.ponto3')
        const banner = document.querySelector('.banner')


        banner.style.backgroundImage = 'url(./complementos/foto6.jpg)'
        banner.style.backgroundPosition = 'top'
     
    
        button.setAttribute('class','ponto')
    
        button2.setAttribute('class','ponto2')
        
        button3.classList.add('active')
    
        sliders.setAttribute('style','margin-left:-200vw')
        
        }


const menu = () => {
    const banner = document.querySelector('banner-1')
    const nav = document.querySelector('nav')
    


    if(nav.getAttribute('style') == 'display:none') {
        nav.setAttribute('style','display:block')
        banner.setAttribute('style','border-right:none')
    } else {  nav.setAttribute('style','display:none')}

   



}



const treinamento = () => {
    const teste5 = document.querySelector('.section-projects-nav ul')
    var nome ='Bruno'
    var sobrenome = 'Gomes'

    console.log(`O nome dele é ${nome} ${sobrenome}`)

    console.log(teste5)

}

/*

const clicou4 = () => {
    const tupni = document.querySelector('.input2')

    //if(tupni.hasAttribute("placeholder")){
   //     console.log('Kra, aqui tem placeholder SIM')
   // } else {
   //     alert ('Não tem mané!')
   // }

    //console.log(tupni.getAttribute('type'))
    //console.log(tupni.getAttribute('placeholder'))
    //console.log(tupni.getAttribute('class'))
    
    //Uso para colocar ou alterar o atributo

    //tupni.setAttribute('type','Placeholder alterado')

    const bot = document.querySelector('.botao')

    if (tupni.getAttribute('type') === 'text' ) {
        tupni.setAttribute('type', 'password')
        bot.innerText = 'Mostrar Senha'
     } else {
        tupni.setAttribute('type','text')
        bot.innerText = 'Ocultar Senha'
     }}*/