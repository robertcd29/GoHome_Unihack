function sortCardsByRating() {
    const cardsContainer = document.getElementById('product-cards');
    const cards = Array.from(cardsContainer.getElementsByClassName('card')); // Convert NodeList to Array

    // Sort cards based on their data-rating attribute
    cards.sort((cardA, cardB) => {
      const ratingA = parseFloat(cardA.getAttribute('data-rating'));
      const ratingB = parseFloat(cardB.getAttribute('data-rating'));
      return ratingB - ratingA; // Sorting in descending order
    });

    // Reorder the cards in the DOM based on sorted order
    cards.forEach(card => {
      cardsContainer.appendChild(card); // Re-attach each card in sorted order
    });
  }




    const rating1 = 21;
    const rating2 = 91;
    const rating3 = 80;
    const rating4 = 1;

    // Display the constant rating in the HTML element
    document.getElementById('rating-number1').innerText = rating1;
    document.getElementById('rating-number2').innerText = rating2;
    document.getElementById('rating-number3').innerText = rating3;
    document.getElementById('rating-number4').innerText = rating4;


  