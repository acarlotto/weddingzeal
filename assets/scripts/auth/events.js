const appApi = require('./api.js')
const appUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// event handler for registration form
const registerUser = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // Test that the passwords match
  // if (data.credentials.password !== data.credentials.password_confirmation) {
    // appUi.onSignupFailure("passwords don't match")
  // } else {
  appApi.addUser(data)
  .then(appUi.onSignupSuccess)
  .catch(appUi.onSignupFailure)
}
// }

// event handler for login form
const loginUser = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.userLogin(data)
  .then(appUi.onSigninSuccess)
  .catch(appUi.onSigninFailure)
}

const logoutUser = function () {
  // const data = getFormFields(this)
  event.preventDefault(event)
  appApi.userLogout()
  .then(appUi.onLogoutSuccess)
  .catch(appUi.onLogoutFailure)
}

// const onShowEvents = function () {
  // event.preventDefault(event)
  // appApi.addEvent()
  // .then()
  // .catch()
// }

// onGetevent to show all user events
const onGetEvents = function (event) {
  event.preventDefault()
  appApi.showEvent()
  .then(appUi.onSuccessGetEvent)
  .catch(appUi.onFailureGetEvent)
}

const onGetUsersEvents = function (id) {
  event.preventDefault()
  appApi.showUserEvent(id)
  .then(appUi.onSuccessGetUserEvent)
  .catch(appUi.onFailureGetUserEvent)
}

// onCreateNewEvent = fuction (data) {
  // event.preventDefault()
  // let data = getFormFields(event.target)
  // appApi.newEvent(data)
  // .then(appUi.getAllEvents)
  // .catch(appUi.getAllEventsFail)
// }

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  onGetEvents,
  onGetUsersEvents
  // onCreateNewEvent
}
