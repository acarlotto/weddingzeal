const appApi = require('./api.js')
const appUi = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields')

// event handler for registration form
const registerUser = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // Test that the passwords match
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
    // $('#errorMessage').text('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match. Try again!' + ' </p></div>')
  } else {
    appApi.addUser(data)
  .then(appUi.onSignupSuccess)
  .catch(appUi.onSignupFailure)
  }
}

// event handler for login form
const loginUser = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  appApi.userLogin(data)
  .then(appUi.onSigninSuccess)
  .then(() => {
    $('#eventsShow').click()
  })
  .catch(appUi.onSigninFailure)
}

const logoutUser = function (event) {
  // const data = getFormFields(this)
  event.preventDefault()
  appApi.userLogout()
  .then(appUi.onLogoutSuccess)
  .catch(appUi.onLogoutFailure)
}

const resetPassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.passwordReset(data)
  .then(appUi.onResetSuccess)
  .catch(appUi.onResetFailure)
}

const addHandlers = () => {
  $('#registration').on('submit', registerUser)
  $('#login').on('submit', loginUser)

  // $('#login').on('submit', function () {
  //   event.preventDefault(data)
  //   loginUser()
  // })

  $('#log-out').on('click', logoutUser)
  $('#passChange').on('submit', resetPassword)
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  addHandlers
}
