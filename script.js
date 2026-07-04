const squares = document.querySelectorAll('.square');

const LAVENDER = '#E6E6FA';
const COFFEE = '#6F4E37';

squares.forEach(square => {
  // When mouse enters a square, change the background color of ALL OTHER squares to COFFEE
  square.addEventListener('mouseenter', () => {
    squares.forEach(sq => {
      if (sq !== square) {
        sq.style.backgroundColor = COFFEE;
      }
    });
  });

  // When mouse leaves the square, reset ALL squares back to LAVENDER
  square.addEventListener('mouseleave', () => {
    squares.forEach(sq => {
      sq.style.backgroundColor = LAVENDER;
    });
  });
});