let prompt = require('prompt-sync')();
const {game} = require("./gameMatch")
const {initializeTeams, chooseTeams} = require("./sport_teams");

function initalizeGame() {
    initializeTeams()
    chooseTeams()
    game(6,1);
}

initalizeGame()


