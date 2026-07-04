//your JS code here. If required.
const squares = document.querySelectorAll('.square');

const LAVENDER = '#E6E6FA';
const COFFEE = '#6F4E37';

squares.forEach(square => {
  square.addEventListener('mouseenter', () => {
    squares.forEach(sq => {
      if (sq !== square) {
        sq.style.backgroundColor = COFFEE;
      }
    });
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = LAVENDER;
    });
  });
});
