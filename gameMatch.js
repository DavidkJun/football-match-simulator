const {team1,team2,team3,team4} = require('./sport_teams')
const {firstMatchTeams} = require('./main')
const {secondMatchTeams} = require('./main')
const {team1Name,team2Name,team3Name,team4Name} = require("./sport_teams");

let teamNames = [team1Name, team2Name, team3Name,team4Name]

let actionsAray = [
    takeTheBall,
    pass,
    hit
];

let isBallTaken = false;

function getMatchTeam(teamName, match) {
    switch (match) {
        case 1:
            if(firstMatchTeams.includes(teamName)) {
                for (let team of teamName) {
                    if (team === team1Name){
                        return team1;
                    }else if(team === team2Name) {
                        return team2;
                    }else if(team === team3Name){
                        return team3;
                    }else {
                        return team4;
                    }
                }
            }
        case 2:
            if(secondMatchTeams.includes(teamName)) {
                for (let team of teamName) {
                    if (team === team1Name){
                        return team1;
                    }else if(team === team2Name) {
                        return team2;
                    }else if(team === team3Name){
                        return team3;
                    }else {
                        return team4;
                    }
                }
            }
    }
}

function action(match) {
    let randActionId = Math.floor(Math.random() * 3)
    let randTeamId = Math.floor(Math.random() * 2);

    switch (match) {
        case 1:
            if(isBallTaken === false){
                takeTheBall(getMatchTeam(firstMatchTeams[randTeamId], 1));
                isBallTaken = true;
                break
            }else {
                //perform hit or pass
            }

        case 2:
            if(isBallTaken === false){
                takeTheBall(getMatchTeam(secondMatchTeams[randTeamId], 2));
                isBallTaken = true;
                break;
            }else {
                //perform hit or pass
            }
    }
}

function takeTheBall(team) {
    let randPlayerId = Math.floor(Math.random() * 4)
    let playersArr = Object.keys(team)
    //team is an object and we need to acces key by id
    console.log(`Player ${playersArr[randPlayerId]} takes the ball`)
    return playersArr[randPlayerId]
}

action(1)

function hit() {

}

function pass() {

}

function registerPoint() {

}

function checkTheDistance() {

}

function checkPassAccuracy() {

}

function updateMatchData() {

}

function checkMvp() {

}

function checkMatchResults() {

}