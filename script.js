const squares = document.querySelectorAll('.square');

const LAVENDER = '#E6E6FA';
const COFFEE = '#6F4E37';

squares.forEach(square => {
  // 1. Mouse Enter Event
  square.addEventListener('mouseenter', () => {
    squares.forEach(sq => {
      if (sq !== square) {
        sq.style.backgroundColor = COFFEE;
      } else {
        sq.style.backgroundColor = LAVENDER;
      }
    });
  });

  // 2. Mouse Leave Event
  square.addEventListener('mouseleave', () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = LAVENDER;
    });
  });
});