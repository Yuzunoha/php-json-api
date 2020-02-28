
$(function () {
  $.getJSON('http://localhost:1234/echo_json.php', function (data) {
    Object.keys(data).forEach(function (key) {
      $('#contents').append('<ul id="' + key + '">');
      data[key].forEach(function (value, index, array) {
        $(`#${key}`).append('<li>' + value + '</li>');
      });
    });
  });
});