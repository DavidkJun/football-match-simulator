let prompt = require('prompt-sync')();
const {game} = require("./gameMatch")

function initalizeGame() {
    let teamIntializer  = require('./sport_teams');
    game(6,1);
    game(6, 2)


}

initalizeGame()


