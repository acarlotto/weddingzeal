'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const appEvents = require('../scripts/auth/events')
// require('./example')

$(() => {
  $('#registration').on('submit', appEvents.registerUser)
  $('#login').on('submit', appEvents.loginUser)
  $('#log-out').on('click', appEvents.logoutUser)

  $('#passChange').on('submit', appEvents.resetPassword)
  // $('#eventsShow').on('submit', appEvents.onGetEvents)
  $('#eventsShow').click(function () {
    const myDiv = $('#eventsShow')
    myDiv.clearQueue()
    $(this).on('submit', appEvents.onGetEvents)
    // appEvents.onCreateNewEvent()
  })

  $('#eventsShowUser').click(function () {
    // const myDiv = $('#eventsShow')
    // myDiv.clearQueue()
    $(this).on('submit', appEvents.onGetUsersEvents)
    // appEvents.onCreateNewEvent()
  })
  // $('#eventsShowUser').on('click', appEvents.onGetUsersEvents)
  $(document).on('click', "#deleteEvent", appEvents.onDeleteEvent)
  $(document).on('click', "#updateEvent", appEvents.updateEvent)
  $('#create-event').on('submit', appEvents.onCreateNewEvent)
  $('#updatEvent').on('submit', appEvents.updateEvent)
})

$('#showEdit').click(function () {
  $('#updatEvent').append('test')
})

$(document).ready(function () {
  $('#message').show()
  $('#edit').show()
  $('#create-event').show()
  $('#updateEvent').show()
  $('#passChange').show()
  $('.list').show()
  $('#log-out').hide()
  $('#passChangeButton').show()
  $('#errorMessage').show()
  // $('#log-out').hide()
})

jQuery(function () {
  jQuery('#edit').click(function () {
    // $('#message').toggle('slow')
    // $('#edit').toggle('slow')
    jQuery('#passChange').toggle('slow')
    jQuery('#create-event').toggle('slow')
    jQuery('#update-event').toggle('slow')
    $('#updatEvent').show()
  })
})
