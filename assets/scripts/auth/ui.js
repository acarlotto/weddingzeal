'use strict'

const app = require('../app.js')
const appEvents = require('./events.js')

const onSignupSuccess = function () {
  $('#errorMessage').empty()
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
  $('#yayMessage').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Login. </p></div>')
  // console.log('Signup Successful!')
}

const onSignupFailure = () => {
  // console.log('There was problem signing up, please try again!')
  $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
}

const onSigninSuccess = function (data) {
  app.user = data.user
  // console.log('sign in successful')
  // $('#yayMessage').empty()
  // $('#yayMessage').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed in! </p></div>')
  $('#errorMessage').empty()
  $('#yayMessage').empty()
  $('#changePasswordMessage').empty()
  $('#begin').prepend('<div class="row" style="text-align: center; color: #f56c4b"> <p> ' + 'Create a todo item using the <i>create a todo</i> button  or view your list below.' + ' </p></div>')
  $('#message').show()
  $('#log-out').show()
  $('.list').show()
  $('#login').find('input:text').val('')
  $('#login').find('input:password').val('')
  $('#registration').hide()
  $('#login').hide()
  $('#create-event').hide()
  $('#createEventButton').show()
  $('#passChange').hide()
  $('#showChangePassButton').show()
  $('#eventsShow').show()
}

const onSigninFailure = (error) => {
  // console.log('Invalid username or password.')
  $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or password is incorrect. Try again!' + ' </p></div>')
}

const onLogoutSuccess = function (app) {
  $('#registration').show()
  $('#login').show()
  $('#passChange').hide()
  $('#create-event').hide()
  $('#update-event').show()
  // $('#errorMessage').hide()
  $('.list').hide()
  $('#log-out').hide()
  // $('#message').show()
  $('#edit').hide()
  $('#createEventButton').hide()
  $('#message').empty()
  $('#showChangePassButton').hide()
  $('#begin').hide()
  // console.log('sign-out successful')
}

const onLogoutFailure = function () {
  // console.log('error signing out')
}

// get all events not for particular user put in ui.js
const onSuccessGetEvent = function (data) {
  $('#message').empty()
  const events = data.events
  const my_id = data.events.id
  events.forEach(function (event) {
    // console.log(event.title)
    // console.log(event.id)
    // console.log(data.events.id)
    $('#message').append('<div class="row" style="text-align: center; color: black"> <h5><input type="checkbox"> ' + event.title + ' <a href="javascript:" id="' + event.id + '" class="deleteEvent">delete</a>  <button type="Submit" id="' + event.id + '" class="btn btn-info edit">edit</button></h5></p><p hidden id="my_id"> ' + event.id + ' </p></div>')
    // $('#edit').show()
    $('#create-event').hide()
    $('#updateEvent').hide()
    $('#showChanges').empty()
  })
}

// const onSuccessGetUserEvent = function () {
//   let event_id = data.events
//   const events = data.events
//   const my_id = data.events.id
//   events.forEach(function (event) {
//     console.log('ui')
//     console.log(event.title)
//     console.log(event.id)
//     console.log(data.events.id)
//     $('#message').append('<div class="row" style="text-align: center; color: black"> <h3><input type="checkbox"> ' + event.title + ' <h5><a href="javascript:" id="deleteEvent">delete</a>   <button type="Submit" id="' + event.id + '" class="btn btn-info edit">edit</button> </h5></h3></p><p hidden id="my_id"> ' + event.id + ' </p></div>')
//     $('#edit').show()
//     console.log(my_id)
//   })
// }

const onFailureGetUserEvent = function (data) {
  // console.log('failure')
}

// get all events
const getAllEvents = function (data) {
  app.user.events = data.events
}

// CREATE New EVENT
const newSuccess = function () {
  // console.log('success')
  $('#create-event').find('input:text').val('')
  $('#create-event').hide()
  $('#eventsShow').show()
  $('#message').hide()
  $('#showChanges').prepend('<div class="row" style="text-align: center; color: #f56c4b"> <p> ' + '<b>Todo Item Created!<b> <br> Click <i>view list</i> to see your changes!' + ' </p></div>')

}

const newFail = function () {
  // console.log('fail')
}

const onResetSuccess = function () {
  $('#yayMessage').prepend('<div class="row" style="text-align: center; color: black"> <p>Your Password was Reset! </p></div>')
  $('#passChange').find('input:text').val('')
  $('#passChange').find('input:password').val('')
  // console.log('password reset successful')
}

const onResetFailure = function () {
  $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'There was a problem reseting your password try again!' + ' </p></div>')
  $('#passChange').find('input:text').val('')
  $('#passChange').find('input:password').val('')
  // console.log('password reset failed')
}

const deleteSuccess = function () {
  // console.log('delete success')
  $('#showChanges').prepend('<div class="row" style="text-align: center; color: #f56c4b"> <p> ' + '<b>ITEM DELETED!<b> <br> Click <i>view list</i> to see your changes!' + ' </p></div>')
//  $('#message').empty()
//  onSuccessGetEvent()
}

const deleteFail = function (error) {
  // console.log('delete fail')
  // console.error(error)
}

const onUpdateSuccess = function () {
  $('#updateEvent').find('input:text').val('')
  $('#updateEvent').hide()
  $('#eventsShow').show()
  $('#showChanges').prepend('<div class="row" style="text-align: center; color: #f56c4b"> <p> ' + '<b>Todo Item Updated!<b> <br> Click <i>view list</i> to see your changes!' + ' </p></div>')
  // $('#eventsShow').trigger()
  // console.log('success update')
}

const onUpdateFail = function () {
  // console.log('fail update')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onSuccessGetEvent,
  // onSuccessGetUserEvent,
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
