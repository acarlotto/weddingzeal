const appApi = require('./api.js')
const appUi = require('./ui.js')
const app = require('../app.js')
const getFormFields = require('../../../lib/get-form-fields')

// onGetevent to show all user events
const onGetEvents = function (event) {
  console.log('hi')
  event.preventDefault()
  appApi.showEvent(event)
  .then(appUi.onSuccessGetEvent)
  .catch(appUi.onFailureGetEvent)
}

// const onGetUsersEvents = function (event_id) {
//   console.log('events.js')
//   event.preventDefault()
//   appApi.showUserEvents(event_id)
//   .then(appUi.onSuccessGetUserEvent)
//   .catch(appUi.onFailureGetUserEvent)
// }

// post
const onCreateNewEvent = function () {
  const data = getFormFields(this)
  console.log('create')
  event.preventDefault()
  appApi.newEvent(data)
  .then(appUi.newSuccess)
  .then(() => {
    $("#eventsShow").click()
  })
  .catch(appUi.newFail)
}

const onDeleteEvent = function (data) {
  //$('#deleteEvent').val(my_id)
  const delete_id = $(this).attr('data-id')
  console.log(delete_id)
  event.preventDefault()
  appApi.deleteEvent(delete_id)
  .then(appUi.deleteSuccess)
  .then(() => {
    $("#eventsShow").click()
  })
  .catch(appUi.deleteFail)
}

const updateEvent = function (event) {
  // $('#updateEvent').val(my_id)
  // let title = $(event.target).parents('form').find('.event-title').html()
  const data = getFormFields(this)
  let update_id = data.event.event_id
  let update_title = data.event.event_title
  console.log('update bbb')
  event.preventDefault()
  appApi.updateEvent(data, update_id)
  .then(appUi.onUpdateSuccess)
  .then(() => {
    $("#eventsShow").click()
  })
  .catch(appUi.onUpdateFail)
}

const addHandlers = () => {
  $(document).ready(function () {
    $('#create-event').hide()
    $('#updateEvent').hide()
  })

  // $(document).on('submit', "#updateEvent", updateEvent)
  // $('#updateEvent').on('submit', onGetEvents)
  // $('#eventsShow').click(function () {
  //   const myDiv = $('#eventsShow')
  //   myDiv.clearQueue()
  //   $(this).on('submit', onGetEvents)
  //   $('#message').show()
  // })
  // $(document).on('click', "#message button", function () {
  //   $('#updateEvent').show()
  //   $('#message').hide()
  //   $('#eventsShow').hide()
  //   let update_id = $(this).attr('id')
  //   $('#eventId').val(update_id)
  // })
}

// const onGoHome = () => {
//   event.preventDefault()
//   if (app.user.id) {
//     api.getUser()
//       .done(ui.renderProfile)
//       .fail(ui.getUserFailure)
//   } else {
//     ui.goHome()
//   }
// }

module.exports = {
  onGetEvents,
  // onGetUsersEvents,
  onCreateNewEvent,
  onDeleteEvent,
  updateEvent,
  addHandlers,
  // onGoHome
  // onGetAllLists
}
