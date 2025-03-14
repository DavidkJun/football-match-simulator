const {team1,team2,team3,team4} = require('./sport_teams')
const {firstMatchTeams} = require('./main')
const {secondMatchTeams} = require('./main')
const {team1Name,team2Name,team3Name,team4Name} = require("./sport_teams");

let teamNames = [team1Name, team2Name, team3Name,team4Name]


let currentHolder = '';

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
                let randTeam= firstMatchTeams[randTeamId];
                takeTheBall(getMatchTeam(randTeam, 1));
                isBallTaken = true;

            }else {
                hitOrPass(currentHolder,getPlayersTeam(currentHolder));
            }

        case 2:
            if(isBallTaken === false){
                let randTeam= secondMatchTeams[randTeamId];
                takeTheBall(getMatchTeam(randTeam, 2));
                isBallTaken = true;

            }else {
                hitOrPass(currentHolder,getPlayersTeam(currentHolder));
            }
    }
}

function takeTheBall(team) { // add id statement to check for curent holder
    let randPlayerId = Math.floor(Math.random() * 4)
    let playersArr = Object.keys(team)
    console.log(`${playersArr[randPlayerId]} takes the ball`)
    currentHolder = playersArr[randPlayerId];
    return playersArr[randPlayerId]
}


function hit(player, team) {
    console.log(`${player} performs a hit`);
    let distance = checkTheDistance()
    console.log(`Player hit the ball from distance of ${distance} meters`)

    if(checkIfGoal()) {
        console.log(`${player} scored a goal`);
        registerPoint(player, team)
        isBallTaken = false;
    }else {
        console.log(`${player} missed a goal`)
        isBallTaken = false;
    }
}

function pass(player) {
    let team = getPlayersTeam(player);
}

function hitOrPass(player, team) {
    console.log()
    hit(player,team)
}

function registerPoint(player, team) {
    team[player] ++;
    console.log(team)
}

function checkTheDistance() {
    let min = 3;
    let max = 30;
    let distance = Math.random() * (max-min) + min
    return (Math.round(distance * 10) / 10);
}

function checkIfGoal() {

    let randNum = Math.random() * 5;
    if(randNum < 3) {
        return true;
    }else return false;
}

function getPlayersTeam(player) {
    if (player in team1) {
        return team1;
    }else if(player in team2 ) {
        return team2;
    }else if(player in team3){
        return team3;
    }else {
        return team4;
    }
}

function checkPassAccuracy() {

}

function updateMatchData() {

}

function checkMvp() {

}

function checkMatchResults() {

}

action(1)
action(1)
action(1)
action(1)
action(1)
