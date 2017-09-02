'use strict'

const app = require('../app.js')
const appEvents = require('./events.js')

const onSignupSuccess = function () {
  $('#yayMessage').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Login. </p></div>')
  console.log('Signup Successful!')
}

const onSignupFailure = () => {
  console.log('There was problem signing up, please try again!')
  $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
}

const onSigninSuccess = function (data) {
  app.user = data.user
  console.log('sign in successful')
  // $('#yayMessage').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed in! </p></div>')
  $('#message').show()
  $('#log-out').show()
  $('.list').show()
  // $('#message').empty()
  $('#login').find('input:text').val('')
  $('#login').find('input:password').val('')
  // $("#login").resetForm()
  // $('#passChange').hide()
  // $('#create-event').hide()
  // $('#update-event').hide()
  // $('#registration').hide()
  // $('#login').hide()
  // $('#errorMessage').hide()
}

const onSigninFailure = (error) => {
  console.log('Invalid username or password.')
  $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or password is incorrect. Try again!' + ' </p></div>')
}

const onLogoutSuccess = function (app) {
  $('#registration').show()
  $('#login').show()
  $('#passChange').hide()
  $('#create-event').show()
  $('#update-event').show()
  $('#errorMessage').hide()
  $('.list').hide()
  $('#log-out').hide()
  $('#message').show()
  $('#edit').hide()
  console.log('sign-out successful')
}

const onLogoutFailure = function () {
  console.log('error signing out')
}

// get all events not for particular user put in ui.js
const onSuccessGetEvent = function (data) {
  $('#message').empty()

  const events = data.events
  const my_id = data.events.id
  events.forEach(function (event) {
    console.log(event.title)
    console.log(event.id)
    console.log(data.events.id)
    $('#message').append('<div class="row" style="text-align: center; color: black"> <h3><input type="checkbox"> ' + event.title + ' <h5><a href="javascript:" id="deleteEvent">delete</a>   <button type="Submit" id="edit" class="btn btn-info">edit</button> </h5></h3></p><p hidden id="my_id"> ' + event.id + ' </p></div>')
    $('#edit').show()
    console.log(my_id)
  })
}

const onSuccessGetUserEvent = function () {
  let event_id = data.events
  const events = data.events
  const my_id = data.events.id
  events.forEach(function (event) {
    console.log(event.title)
    console.log(event.id)
    console.log(data.events.id)
    $('#message').append('<div class="row" style="text-align: center; color: black"> <h3><input type="checkbox"> ' + event.title + ' <h5><a href="javascript:" id="deleteEvent">delete</a>   <button type="Submit" id="edit" class="btn btn-info">edit</button> </h5></h3></p><p hidden id="my_id"> ' + event.id + ' </p></div>')
    $('#edit').show()
    console.log(my_id)
  })
}

const onFailureGetUserEvent = function (data) {
  console.log('failure')
}

// get all events
const getAllEvents = function (data) {
  app.user.events = data.events
}

// CREATE New EVENT
const newSuccess = function () {
  console.log('success')
}

const newFail = function () {
  console.log('fail')
}

const onResetSuccess = function () {
  console.log('password reset successful')
}

const onResetFailure = function () {
  console.log('password reset failed')
}

const deleteSuccess = function () {
  console.log('delete success')
  $('#message').empty()
  onSuccessGetEvent()
}

const deleteFail = function () {
  console.log('delete fail')
}

const onUpdateSuccess = function () {
  console.log('success update')
}

const onUpdateFail = function () {
  console.log('fail update')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onSuccessGetEvent,
  onSuccessGetUserEvent,
  onFailureGetUserEvent,
  getAllEvents,
  newSuccess,
  newFail,
  onResetSuccess,
  onResetFailure,
  deleteSuccess,
  deleteFail,
  onUpdateSuccess,
  onUpdateFail
}
