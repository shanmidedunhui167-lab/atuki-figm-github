const cards = document.querySelectorAll(".card, .h3-card");

const cardObserver = new IntersectionObserver((entries) => {
  let delay = 0;

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate([
        {
          opacity: 0,
          transform: 'translateY(40px) scale(0.95)',
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          transform: 'translateY(0) scale(1)',
          filter: 'blur(0)'
        }
      ], {
        duration: 700,
        delay: delay,
        easing: 'ease-out',
        fill: 'forwards'
        
      });

      delay += 150;
      
    }
   
  });
}, { threshold: 0.1 });


cards.forEach(card => cardObserver.observe(card));


/*topbtn*/
const topbtn=document.querySelector(".disk-img");

topbtn.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
  });

});