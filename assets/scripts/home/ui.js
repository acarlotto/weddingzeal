'use strict'

const listEvents = require('../lists/events.js')

const seeList = () => {
  event.preventDefault()
  $('.eventsShow').on('submit', listEvents.onGetEvents)
}

module.exports = {
  seeList
}
