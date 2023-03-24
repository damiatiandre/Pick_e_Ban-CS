const teamOneName = prompt("Digite o nome do time 1")
const teamTwoName = prompt("Digite o nome do time 2")

document.body.style.display = "block"

const team1 = teamOneName
? document.querySelector("#team1").innerHTML = teamOneName
: "Time 1"

const team2 = teamTwoName
? document.querySelector("#team2").innerHTML = teamTwoName
: "Time 2"

let teamTurn = team1

let remainingMaps = ["Train", "Mirage", "Cache", "Inferno", "Cobblestone", "Nuke", "Dust 2", "Vertigo", "Anubis", "Ancient"]

const mapsCards = document.querySelectorAll(".card")

const teamTurnText = document.querySelector("#turnText")

const changeTeamTurnInnerText = (t = 0) => {
t === 0
? teamTurnText.innerText = `É a vez do time ${teamTurn} banir o mapa`
: teamTurnText.innerHTML = `O mapa do jogo será ${t}`
}

changeTeamTurnInnerText()

const banMap = (event) => {
event.currentTarget.removeEventListener("click", banMap)

event.currentTarget.classList.add("selected")
event.currentTarget.querySelector(".accept").innerText = "Vetado"

const bannedMap = event.currentTarget.querySelector(".map-name").innerText
remainingMaps = remainingMaps.filter(map => map != bannedMap)

if (remainingMaps.length === 1) {
    const choosenMap = document.querySelector(".card:not(.selected)")
    choosenMap.removeEventListener("click", banMap)
    choosenMap.classList.add("picked", "disable-hover")

    changeTeamTurnInnerText(remainingMaps[0])

    return
}

teamTurn === team1
? teamTurn = team2
: teamTurn = team1

changeTeamTurnInnerText()
}

mapsCards.forEach(map => map.addEventListener("click", banMap))
