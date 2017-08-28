'use strict'

const app = require('../app.js')

const onSignupSuccess = function () {
  console.log('Signup Successful!')
}

const onSignupFailure = (error) => {
  if (error.status === 401) {
    // console.log(error)
    console.log('There was problem signing up, please try again!')
  } else {
    console.log('There was problem signing up, please try again!***')
  }
}

const onSigninSuccess = function (data) {
  app.user = data.user
  console.log('sign in successful')
  console.log(app)
  $('#message').show()
}

// const onSigninFailure = function (error) {
  // console.log('Sign in failed')
// }

const onSigninFailure = (error) => {
  if (error.status === 401) {
    console.log('Invalid username or password.')
  } else {
    // displayErrorMessage()
  }
}

const onLogoutSuccess = function (app) {
  console.log('sign-out successful')
}

const onLogoutFailure = function () {
  console.log('error signing out')
}

// get all events not for particular user
const onSuccessGetEvent = function (data) {
  console.log(app.user.id)
  console.table(data.events)
}

// get events for signed in user
const onSuccessGetUserEvent = function (data) {
  console.log(app.user.id)
  console.table(data.evnets)
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
  onResetFailure
}
