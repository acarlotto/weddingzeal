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
    $('#message').show()
    // console.log('this one')
    // appEvents.onCreateNewEvent()
  })

  $('#createEventButton').click(function () {
    $('#create-event').show()
    $('#eventsShow').hide()
    $('#message').hide()
  })

  $(document).on('click', "#message button", function () {
    $('#updateEvent').show()
    $('#message').hide()
    $('#eventsShow').hide()
    let update_id = $(this).attr('id')
    $('#eventId').val(update_id)
    // console.log(update_id)
  })

  $(document).on('click', ".deleteEvent", appEvents.onDeleteEvent)
  $(document).on('submit', "#updateEvent", appEvents.updateEvent)
  $('#create-event').on('submit', appEvents.onCreateNewEvent)
  // $('#updatEvent').on('submit', appEvents.updateEvent)
})

// adding this to automate view list when updating and event - might have to remove
$('#updateEvent').on('submit', appEvents.onGetEvents)

$('#showEdit').click(function () {
  $('#updatEvent').append('test')
})

$(document).ready(function () {
  $('#message').hide()
  // $('.edit').show()
  $('#create-event').hide()
  $('#updateEvent').hide()
  $('#passChange').hide()
  $('.list').hide()
  $('#log-out').hide()
  $('#passChangeButton').hide()
  $('#errorMessage').show()
  $('#createEventButton').hide()
  // $('#log-out').hide()
})

// jQuery(function () {
//   jQuery('#edit').click(function () {
//     // $('#message').toggle('slow')
//     // $('#edit').toggle('slow')
//     jQuery('#passChange').toggle('slow')
//     jQuery('#create-event').toggle('slow')
//     jQuery('#update-event').toggle('slow')
//     $('#updatEvent').show()
//   })
// })
