const {team1,team2,team3,team4} = require('./sport_teams')
const {firstMathTeams} = require('./main')

let actionsAray = [
    takeTheBall,
    makePass,
    hit
];

let isBallTaken = false;

function action(teams) {
    let randActionId = Math.floor(Math.random() * 3)
    let randTeamId =   Math.floor(Math.random() * 2);
    //first match ball
    if(isBallTaken === false) {

        takeTheBall()
        isBallTaken = true;
    }
}

function takeTheBall(team) {
    let randPlayerId = Math.floor(Math.random() * 4)
    let playersArr = Object.keys(team)
    //team is an object and we need to acces key by id
    console.log(`Player ${playersArr[randPlayerId]} takes the ball`)
}

//takeTheBall(team1)
action(firstMathTeams)

function hit() {

}

function makePass() {

}

function registerPoint() {

}

function checkTheDistance() {

}

function updateMatchData() {

}

function checkMvp() {

}

function checkMatchResults() {

}