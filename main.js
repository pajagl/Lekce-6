// tady je místo pro náš program

/*
// Cvičení - knihovny
// E-mail a číslo karty
const email = prompt("Zadejte svou e-mailovou adresu")

const isEmail = validator.isEmail(email)
const messageElement = document.querySelector('#msg')

if (isEmail) {
	messageElement.textContent = 'E-mail v pořádku'
	messageElement.classList.add('msg--valid')
} else {
	messageElement.textContent = 'Neplatný e-mail'
	messageElement.classList.add('msg--invalid')
}

const karta = prompt ("Zadejte číslo karty")

const isCreditCard = validator.isCreditCard(karta)
const messageElement2 = document.querySelector('#num')

if(isCreditCard){
    messageElement2.textContent = "Číslo karty je v pořádku."
    messageElement2.classList.add("msg--valid")
} else {
    messageElement2.textContent = "Číslo karty je neplatné."
    messageElement2.classList.add("msg--invalid")
}
*/

// Mimozemský život
const narozeniny = dayjs("YYYY-09-23")
const now = dayjs()

if (now.isAfter(narozeniny)) {
    alert("Promeškal jsi Pájiny narozeniny.")
} else {
    alert ("Jupí, Pájiny narozeniny se blíží!")
}


/*
// poznámky z hodiny - Štědrý den
const stedryDen = dayjs("2022-12-24")
const now = dayjs()

if (now.isAfter(stedryDen)) {
    alert("Bohužel jsi Vánoce promeškal/a.")
} else {
        alert("Jupí, Vánoce jsou za rohem :)!")
}
*/
