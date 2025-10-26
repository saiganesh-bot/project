// Submit button logic for thank you tab in new window
window.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submit-rating');
    if (submitBtn) {
        submitBtn.onclick = function() {
            // Use the currentRating variable from the star rating logic
            let rating = window.__selectedRating || 0;
            let ratingText = rating > 0 ? `You rated ${rating}` : "No rating selected.";
            const thankYouHtml = `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Thank You</title><link rel='stylesheet' href='style.css'></head><body style='background:#f4f4f4;'><div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;'><h2 style='color:#222; font-size:2rem; margin-bottom:1.5rem;'>${ratingText}</h2><div style='color:#222; font-size:1.3rem; margin-bottom:1.2rem;'>Thank you!</div><button id='back-to-resume' style='padding:0.6rem 2.2rem; font-size:1.1rem; background:#0074d9; color:#fff; border:none; border-radius:6px; font-weight:600; cursor:pointer; transition:background 0.2s;'>Back to Resume</button></div><script>document.getElementById('back-to-resume').onclick=function(){window.close();};</script></body></html>`;
            const win = window.open('', '_blank');
            win.document.write(thankYouHtml);
            win.document.close();
        };
    }
});
// star-rating.js
// Interactive star rating logic for the resume

window.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-row .star');
    let currentRating = 0;
    // Expose selected rating globally for submit logic
    window.__selectedRating = 0;
    function setStars(rating) {
        stars.forEach((star, idx) => {
            if (rating > 0 && idx < rating) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }
    stars.forEach(star => {
        star.addEventListener('click', function() {
            currentRating = parseInt(this.getAttribute('data-value'));
            window.__selectedRating = currentRating;
            setStars(currentRating);
        });
        star.addEventListener('mouseover', function() {
            setStars(parseInt(this.getAttribute('data-value')));
        });
        star.addEventListener('mouseout', function() {
            setStars(currentRating);
        });
    });
    // No stars filled initially
    setStars(0);
});
