var path = require("path");
var db = require("../models");
var express = require("express");
var app = express.Router();
var jwtExp = require("express-jwt");
var tokenSecret = require("../tokensecret.js");


app.get("/", function(req, res) {
  res.render("index");
});

app.get("/register", function(req, res) {
  res.render("register");
});

app.get("/players", function(req, res) {
  db.player.findAll({
        order: [
            ["FantasyPoints", "DESC"]
        ]
    })
    .then(function(player) {
        var hbsObject = {
          player: player
        };

        res.render("players", hbsObject);
    });
})

module.exports = app;
