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
  $('#message').empty()
  console.log('sign in successful')
  // $('#yayMessage').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed in! </p></div>')
  $('#message').show()
  $('#log-out').show()
  $('.list').show()
  $('#passChange').hide()
  $('#create-event').hide()
  $('#update-event').hide()
  $('#registration').hide()
  $('#login').hide()
  $('#errorMessage').hide()
}

// const onSigninFailure = function (error) {
  // console.log('Sign in failed')
// }

const onSigninFailure = (error) => {
  console.log('Invalid username or password.')
  $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or password is incorrect. Try again!' + ' </p></div>')
}

const onLogoutSuccess = function (app) {
  $('#registration').show()
  $('#login').show()
  $('#passChange').hide()
  $('#create-event').hide()
  $('#update-event').hide()
  $('#errorMessage').hide()
  $('.list').hide()
  $('#log-out').hide()
  $('#message').hide()
  $('#edit').hide()
  console.log('sign-out successful')
}

const onLogoutFailure = function () {
  console.log('error signing out')
}

// get all events not for particular user put in ui.js
const onSuccessGetEvent = function (data) {
  $('#message').empty()
  for (let i = 0; i < data.events.length; i++) {
    $('#message').append('<div class="row" style="text-align: center; color: black"> <h3><input type="checkbox"> ' + data.events[i].title + ' <a href=""><h5>delete</h5></a></h3></p><table><tr hidden><td id="my_id"> ' + data.events[i].id + '</td></tr></table></div>')
    // const index = $('#message').index(this)

    const link = data.events[i].id
    console.log(link)
    // $('#link').
    $(document).on('click', '#deleteEvent', function () {
      appEvents.deleteEvent()
    })
    // <button type="Submit" class="btn btn-default">delete Events</button>
    // <button type="Submit" id="#deleteEvent" class="btn btn-default">delete Events</button>
    // $('#deleteEvent').click(function () {
    //   $('#message').remove(data.events[myIndexArray[i]].title)
    // })
    console.log(data.events[i].id)
    $('#edit').show()
  }
    // <button class="btn" id="deleteEvent"> delete </button>
  // document.write(users)
  // console.log(app.user.id)
  console.table(data.events)
  // console.table(data.events[0].title)
}

// get events for signed in user
const onSuccessGetUserEvent = function (data) {
  console.log(app.user.id)
  // console.table(data.events)
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
