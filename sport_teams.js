let prompt = require('prompt-sync')();

const players = require('./players')

let game1Teams = [];
let game2Teams = [];


class teamGenerator {
    constructor(players) {
        this.players = players;

        this.teamOneName = prompt("choose your first team ");
        this.teamTwoName = prompt("choose your second team ");
        this.teamThreeName = prompt("choose your third team ");
        this.teamFourName = prompt("Choose your fourth team ");

        this.teamOne = {};
        this.teamTwo = {};
        this.teamThree = {};
        this.teamFour = {};
    }

    generateTeams(team) {
        while(Object.keys(team).length < 4) {
            let randId = Math.floor(Math.random() * 16)
            let randPlayer = this.players[randId]
            if(this.checkIfFree(randPlayer) === true) {
                team[randPlayer] = 0;
            }
        }
        return team;
    }

    checkIfFree(player) {
        if(this.teamOne.hasOwnProperty(player) === false &&
            this.teamTwo.hasOwnProperty(player) === false &&
            this.teamThree.hasOwnProperty(player) === false &&
            this.teamFour.hasOwnProperty(player) === false ) {
            return true;
        }else {
            return false
        }
    }
    displayTeams() {
        console.log("━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━")
        console.log(`First team: ${this.teamOneName}`)
        console.log( "" + Object.keys(this.teamOne))
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        console.log(`Second team: ${this.teamTwoName}`)
        console.log("" + Object.keys(this.teamTwo))
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        console.log(`Third team: ${this.teamThreeName}`)
        console.log("" + Object.keys(this.teamThree))
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        console.log(`Fourth team: ${this.teamFourName}`)
        console.log("" + Object.keys(this.teamFour))
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    }
}

const teams = new teamGenerator(players)

let teamNames = [teams.teamOneName,teams.teamTwoName, teams.teamThreeName ,teams.teamFourName];

function initializeTeams() {

      teams.generateTeams(teams.teamOne)
      teams.generateTeams(teams.teamTwo)
      teams.generateTeams(teams.teamThree)
      teams.generateTeams(teams.teamFour)

    teams.displayTeams()
}

function chooseTeams() {

    let firstMatchTeam1 = prompt('Enter first team name for this match ');

    if(teamNames.includes(firstMatchTeam1)) {
        game1Teams.push(firstMatchTeam1)
    }else{
        console.log('There is no team with such name')
        firstMatchTeam1 = prompt('Enter first team name for this match ')
    }

    let firstMatchTeam2 = prompt('Enter second team name for this match ')
    if(teamNames.includes(firstMatchTeam2)) {
        game1Teams.push(firstMatchTeam2)
    }else {
        console.log('Please select team from the list')
        firstMatchTeam2= prompt('Enter second team name for this match ');
    }

    for(let t of teamNames) {
        if(game1Teams.includes(t) === false) {
            game2Teams.push(t)
        }
    }

    console.log(`First match teams are ${game1Teams[0]} and ${game1Teams[1]}`)
    console.log(`Second match teams are ${game2Teams[0]} and ${game2Teams[1]}`)
    console.log('LET THE GAME START!!!')

}

module.exports.chooseTeams = chooseTeams;

module.exports.initializeTeams = initializeTeams;

module.exports.team1Name = teams.teamOneName ;
module.exports.team2Name = teams.teamTwoName;
module.exports.team3Name = teams.teamThreeName;
module.exports.team4Name = teams.teamFourName;

module.exports.team1 = teams.teamOne ;
module.exports.team2 = teams.teamTwo;
module.exports.team3 = teams.teamThree;
module.exports.team4 = teams.teamFour;

module.exports.firstMatchTeams = game1Teams;
module.exports.secondMatchTeams = game2Teams;

