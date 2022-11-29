
displayThankYou = function (rating) {
  // Hiding form
  document.getElementById('rating-form').style.display = 'none';
  // Showing thank you pop-up
  document.getElementById('thank-you').style.display = 'flex';
  // Displaying the user choice
  document.getElementById('user-rating-feedback').textContent = `You selected ${rating} out of 5`;
};


init = function () {
  const ratingForm = document.getElementById('rating-form')
  ratingForm.addEventListener('submit', (event) => {
    // Preventing submit button to refresh page
    event.preventDefault();
    const checkedRating = document.querySelector('.radios input[type="radio"]:checked');
    if (checkedRating) {
      // Showing thank you div
      displayThankYou(checkedRating.value);
    }
    else {
      ratingForm.reportValidity()
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
