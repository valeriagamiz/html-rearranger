var $h1one = $('<h1>');
var $ulone = $('<ul>');
var $h1two = $('<h1>');
var $ultwo = $('<ul>');

$h1one.html('Below ground veggies');
$('body').append($h1one);
$('body').append($ulone);
$h1two.html('Above ground veggies');
$('body').append($h1two);
$('body').append($ultwo);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $ulone.append($(this));
  } else {
    $ultwo.append($(this));
  }
});
