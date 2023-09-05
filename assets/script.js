var button = document.getElementById('read_button');
var card = document.getElementsByClassName('card.')

button.addEventListener('click', function() {
  var card = document.querySelector('.card');
  card.classList.toggle('active');

  if (card.classList.contains('active')) {
    return button.textContent = 'Read Less'
  } else {
    return button.textContent = 'Read More'
  }
});