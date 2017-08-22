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
  console.log(app)
  app.user = data.user
  console.log('sign in successful')
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

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure
}
