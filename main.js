let prompt = require('prompt-sync')();

const {team1Name,team2Name,team3Name,team4Name} = require("./sport_teams");

let teamNames = [team1Name, team2Name, team3Name,team4Name]

let game1Teams = [ ]

function initalizeGame() {
    let teamIntializer  = require('./sport_teams');
    chooseTeams()

}

function chooseTeams() {

    let firstMatchTeam1 = prompt('Enter first team name for this match ');

    if(teamNames.includes(firstMatchTeam1)) {
        game1Teams.push(firstMatchTeam1)
    }else{
        console.log('There is no team with such name')
        firstMatchTeam1 = prompt('Enter first team name for this match ')
    }

    let firstMatchTeam2 = prompt('Enter second team name for this match')
    if(teamNames.includes(firstMatchTeam2)) {
        game1Teams.push(firstMatchTeam2)
    }else {
        console.log('Please select team from the list')
        firstMatchTeam2= prompt('Enter second team name for this match ');
    }

    console.log(`First match teams are ${game1Teams[0]} and ${game1Teams[1]}`)
    console.log('LET THE GAME START!!!')

}

initalizeGame()

module.exports.firstMathTeams = game1Teams

