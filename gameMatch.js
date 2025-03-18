const {team1,team2,team3,team4} = require('./sport_teams')

const {firstMatchTeams} = require('./sport_teams')
const {secondMatchTeams} = require('./sport_teams')

const {team1Name,team2Name,team3Name,team4Name} = require("./sport_teams");
let {chooseTeams} = require('./sport_teams')
let {initializeTeams} = require('./sport_teams');

let currentHolder = '';

let isBallTaken = false;
function temporaryInit() {
    initializeTeams()
    chooseTeams()
    timedActions(6,1)
    //timedActions(4,2) problem that when called two timed actions bugs occurs
}

function random(min, max) {
    return Math.random() * (max-min) + min
}

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
    let randTeamId = Math.floor(random(0,2));
    switch (match) {
        case 1:
            if(isBallTaken === false){
                let randTeam= firstMatchTeams[randTeamId];
                takeTheBall(getMatchTeam(randTeam, 1), 1);
                isBallTaken = true;

            }else {
                hitOrPass(currentHolder,getPlayersTeam(currentHolder), 1);
            }

        case 2:
            if(isBallTaken === false){
                let randTeam= secondMatchTeams[randTeamId];
                takeTheBall(getMatchTeam(randTeam, 2), 2);
                isBallTaken = true;

            }else {
                hitOrPass(currentHolder,getPlayersTeam(currentHolder), 2);
            }
    }
}

function takeTheBall(team,match) {
    let randPlayerId = Math.floor(random(0,4))
    let playersArr = Object.keys(team)
    let randPlayer = playersArr[randPlayerId];
    if(randPlayer !== currentHolder) {
        console.log(`${randPlayer} takes the ball`)
        currentHolder = randPlayer;
        return randPlayer;
    }else {
        action(match);
    }
}


function hit(player, team) {
    let distance = checkTheDistance()
    console.log(`${player} performs a hit from a distance of ${distance} meters`);

    if(checkIfGoal()) {
        console.log(`${player} scored a goal`);
        registerPoint(player, team)
        isBallTaken = false;
    }else {
        console.log(`${player} missed a goal`)
        isBallTaken = false;
    }
}

function pass(player, match) {
    let team = getPlayersTeam(player);
    console.log(`${player} makes a pass`);
    takeTheBall(team, match)
}

function hitOrPass(player, team, match) {
    let randNum = random(0,5);

    if(randNum < 2) {
        hit(player,team)
    }else {
        pass(player,match)
    }
}

function registerPoint(player, team) {
    team[player] ++;
    console.log(team)
}

function checkTheDistance() {
    let min = 3;
    let max = 30;
    let distance = random(min, max);
    return (Math.round(distance * 10) / 10);
}

function checkIfGoal() {

    let randNum = random(0,5);
    if(randNum < 2) {
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

function timedActions(numberOfActions, match) {
    let minTime = 800;
    let maxTime = 1500;
    let randomTime = random(minTime,maxTime)

    console.log(` Match ${match} started !!!`)

    while (numberOfActions > 1) {
        setTimeout(() => {action(match)}, randomTime);
        numberOfActions--;
    }
}

module.exports.game = timedActions;