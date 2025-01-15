// Sample Reviews Data
const reviews = [
    {
      text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
      name: "Michael Kaizer",
      role: "CEO of Basecamp Corp"
    },
    {
      text: "Their dedication to understanding our needs and delivering high-quality solutions is unparalleled. The team is professional, proactive, and consistently goes above and beyond to ensure our success.",
      name: "Emma Johnson",
      role: "CMO of TechSolutions"
    },
    {
      text: "Working with them has been a game-changer for our business. Their innovative strategies and tailored approach have significantly boosted our performance and visibility in the market.",
      name: "James Lee",
      role: "Managing Director of InnovateCorp"
    }
  ];
  
 
  let currentReview = 0;
  
  
  const reviewText = document.querySelector(".review-text");
  const reviewerName = document.querySelector(".reviewer-name");
  const reviewerRole = document.querySelector(".reviewer-role");
  const reviewCount = document.querySelector(".review-count");
  
 
  function updateReview(index) {
    const review = reviews[index];
    reviewText.textContent = `“ ${review.text} ”`;
    reviewerName.textContent = review.name;
    reviewerRole.textContent = review.role;
    reviewCount.textContent = `${index + 1}/${reviews.length}`;
  }
  
 
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReview(currentReview);
  });
  
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviews.length;
    updateReview(currentReview);
  });
  
  updateReview(currentReview);



//  animations 
document.addEventListener('DOMContentLoaded', function () {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const target = entry.target;

            if (entry.isIntersecting) {
               
                if (target.classList.contains('left-text')) {
                    target.classList.add('cssanimation', 'fadeInLeft');
                } else if (target.classList.contains('blur-text')) {
                    target.classList.add('cssanimation', 'leBlurIn', 'random');
                } else if (target.classList.contains('top-text')) {
                    setTimeout(() => {
                        target.classList.add('cssanimation', 'leFadeInBottom', 'sequence');
                    }, 200);
                }
            } else {
              
                target.classList.remove('cssanimation', 'fadeInLeft', 'leBlurIn', 'random', 'leFadeInBottom', 'sequence');
            }
        });
    });

   
    const elements = document.querySelectorAll('.left-text, .blur-text, .top-text');
 
    elements.forEach((el) => observer.observe(el));
});




