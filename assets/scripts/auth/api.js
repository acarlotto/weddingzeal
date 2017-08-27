const app = require('../app')

const addUser = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    headers: { 'header': 'Content-Type: application/json' },
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const userLogin = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    // headers: {
      // Authorization: 'Token token=' + app.user.token // store.user.token
  // },
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const userLogout = function (id) {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const showEvent = (id) => {
  return $.ajax({
    url: app.host + '/events/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const showUserEvents = (id) => {
  // const eventId = data.event.id
  return $.ajax({
    url: app.host + '/event/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  addUser,
  userLogin,
  userLogout,
  showEvent,
  showUserEvents
}
