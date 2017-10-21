'use strict'

const app = require('../app.js')
const listEvents = require('./events.js')

// const renderAllItems = (events) => {
//   app.user.events = events;
//   const eventLists = require('../templates/eventList.handlebars');
//   $('#message').html(eventList(lists));
// };

// get all events not for particular user put in ui.js
const onSuccessGetEvent = function (data) {
  $('.list-header').show()
  $('.list-header').empty()
  $('.list').empty()
  console.log('this is the success function in ui')
  const events = data.events
  const my_id = data.events.id
  console.log(events)
  // console.log(id)
  const context = {
    'events': data.events,
    'id': data.events.id
  }
  // const my_id = data.events.id
  const allItems = require('../templates/eventList.handlebars')
  const listTemplateFilled = allItems(context)
  $('.view').append(listTemplateFilled)


  $(":checkbox").on('click', function () {
    $(this).parent().toggleClass("checked")
  })
}

const onFailureGetUserEvent = function (data) {
  // console.log('failure')
}

// get all events
const getAllEvents = function (data) {
  // app.user.events = data.events
}

// CREATE New EVENT
const newSuccess = function () {
  // $('.list').empty()
  // $('.list-header').empty()
  console.log('success')
  $('#create-event').find('input:text').val('')
  // $('#create-event').hide()
  $('#eventsShow').show()
  // $('#showChanges').prepend('<div class="row" style="text-align: center; color: #f56c4b"> <p> ' + '<b>Todo Item Created!<b> <br> Click <i>view list</i> to see your changes!' + ' </p></div>')
}

const newFail = function () {
  // console.log('fail')
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

// const renderProfile = (data) => {
//   if (app.user.id) {
//     app.user.events = data.user.events;
//   } else {
//     app.user = data.user;
//   }
//   let user = app.user;
//   const userProfile = require('../templates/userProfile.handlebars');
//   $('.view').html(userProfile(user));
// };

module.exports = {
  onSuccessGetEvent,
  // onSuccessGetUserEvent,
  onFailureGetUserEvent,
  getAllEvents,
  newSuccess,
  newFail,
  deleteSuccess,
  deleteFail,
  onUpdateSuccess,
  onUpdateFail
  // renderProfile
  // renderAllItems
}
