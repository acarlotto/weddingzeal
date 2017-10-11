const app = require('../app')

// this shows my data
const showEvent = (id) => {
  return $.ajax({
    url: app.host + '/events/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// const showUserEvents = (event_id) => {
//   // console.log('api')
//   return $.ajax({
//     url: app.host + '/event/' + event_id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     }
//   })
// }

// create
const newEvent = (data) => {
  return $.ajax({
    url: app.host + '/events',
    method: 'POST',
    data: {
      "event" : {
      "user_id": app.user.id,
      "title": data.event.title
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// add in other files
const deleteEvent = (delete_id) => {
  // console.log('happy')
  // console.log(delete_id)
  return $.ajax({
    url: app.host + '/events/' + delete_id,
    method: 'DELETE',
    // data: data,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateEvent = function (data, update_id) {
  // let index = event.target.id
  // console.log(app.user.token)
  return $.ajax({
    url: app.host + '/events/' + update_id, // was just id and then app.game.id (didn't work)
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token // store.user.token
    },
    data: {
      'event': {
        'title': data.event.title
      }
    }
  })
}

module.exports = {
  showEvent,
  // showUserEvents,
  newEvent,
  deleteEvent,
  updateEvent
}
