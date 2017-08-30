$(function () {
  const $lists = $('#message')

  $.ajax({
    method: 'GET',
    url: 'http://localhost:4741',
    success:
    $.each(lists, function (i, list) {
      $lists.append('<li>title: ' + list.title + ' </li>')
    })
  })
})
