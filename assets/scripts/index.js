'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const homeEvents = require('./home/events.js')
const appEvents = require('../scripts/auth/events.js')
const listEvents = require('../scripts/lists/events.js')
// require('./example')
const home = require('./templates/home.handlebars')

$(() => {
  $('.view').html(home)
  appEvents.addHandlers()
  listEvents.addHandlers()

  // $('#eventsShow').click(function () {
  //   event.preventDefault()
  //   const myDiv = $('#eventsShow')
  //   myDiv.clearQueue()
  //   $(this).on('submit', listEvents.onGetEvents)
  //   $('#message').show()
  // })
  // $('#createEventButton').click(function () {
  //   $('#create-event').show()
  //   $('#eventsShow').hide()
  //   $('#message').hide()
  //   $('#begin').hide()
  // })
  // $(document).on('click', '#createEventButton', function () {
  //   $('#create-event').show()
  //   console.log('help')
  // })

  $(document).on('submit', '#create-event', listEvents.onCreateNewEvent)

  // $(document).on('click', '#create-event', function () {
  //
  // })

  $(document).on('click', '.deleteEvent', listEvents.onDeleteEvent)
  $(document).on('click', '#eventsShow', listEvents.onGetEvents)

  // $(document).on('click', '#eventsShow', function () {
  //   $('.list-header').show()
  //   listEvents.onGetEvents
  // })
  setAPIOrigin(location, config)
  // $('#createEventButton').hide()
  $(document).ready(function () {
    $('#create-event').hide()
    $('#updateEvent').hide()
    $('.list-header').hide()
  })
})
