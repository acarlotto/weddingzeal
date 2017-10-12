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
  const user = app.user
  const userProfile = require('../templates/userProfile.handlebars')
  $('.view').html(userProfile(user))
  // $('#eventsShow').hide()
  // $('.create').hide()
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
  $('#begin').empty()
  // console.log('sign-out successful')
}

const onLogoutFailure = function () {
  // console.log('error signing out')
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

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onResetSuccess,
  onResetFailure
}
