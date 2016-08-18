var express = require('express')
// var development = require('../knexfile').development
// var knex = require('knex')(development)
var Discogs = require ('disconnect').Client

module.exports = {
  get: get,
  post: post
}

function get (req, res) {
  res.render ('index')
  // knex('users')
  //   .select()
  //   .then(function (users) {
  //     res.render('index', { users: users })
  //   })
  //   .catch(function (err) {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
}

function post (req, res) {
  var id = req.body.id
  var db = new Discogs().database()
  db.search(id, function (err, data) {
    console.log(err)
    console.log (data)
    if (data) {
      res.render('index', {title: data.title})
    }
  })

}
