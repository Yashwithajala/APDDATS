function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

function openPage() {
  window.location.href = "test.html";
}
$(document).ready(function () {
  $('.slick-images').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show one image at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


$(document).ready(function () {
  $('.slick-slider').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.disease-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
});
 $(document).ready(function(){
            $('.disease-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
// Initialize EmailJS
(function () {
  emailjs.init("M6o8AiQIrOvQ6-A3Y");
})();
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm('service_rx44rfl', 'template_44ykwpr', this)
      .then(function () {
        alert('✅ Message sent successfully!');
        form.reset();
      }, function (error) {
        alert('❌ Failed to send message. Error: ' + JSON.stringify(error));
      });
  });
});