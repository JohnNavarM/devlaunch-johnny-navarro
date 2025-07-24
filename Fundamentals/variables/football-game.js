/*
El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
En un partido celebrado el 22/11/23 a las 20:30, el equipo local Argentina se enfrento al 
equipo visitante Brasil. El resultado final fue 1-0 indicando a Argentina como quipo
ganador. 
*/

const eventName = "Eliminatorias Sudamericanas"

const day = 22
const month = 11
const year = 2023

const date = `${day}/${month}/${year}`

const hour = 20
const minutes = 30

const time = `${hour}:${minutes}`

const formatHour = hour - 12
const formatTime = `${formatHour}:${minutes} PM` 

const localTeam = "Argentina"
const visitorTeam = "Brasil"

const localTeamScore = 1
const visitorTeamScore = 0

const score = `${localTeamScore}-${visitorTeamScore}`


console.log (`
    Torneo: ${eventName} ${time}\n
    Equipos: ${localTeam} vs ${visitorTeam}\nx  
    Resultado: ${score}\n   
`)

