import $ from 'jquery';

$(function() {
  var p1 = $('<p>').text('Holberton Dashboard');
  var p2 = $('<p>').text('Dashboard data for the students');
  var p3 = $('<p>').text('Copyright - Holberton School');

  $('body').append(p1, p2, p3);
});
