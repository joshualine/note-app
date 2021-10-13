const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const notes = require('../data/testFile')

function viewOne() {
  return new Promise((resolve, rejects) => {
    resolve(notes)
  })
}

module.exports = {
  viewOne
}
