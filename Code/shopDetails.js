const mobile_nav = document.querySelector('.mobile-navbar-btn')
const navHeader = document.querySelector('.header');

const toggleNavBar = () =>{

  navHeader.classList.toggle("active")
  
};

const descriptionHeading = document.querySelector("#description-Reviews-container-heading01")
const reviewsHeading = document.querySelector("#description-Reviews-container-heading02")

const descriptionContainer = document.querySelector("#description-Reviews-container-container01") 

const ReviewsContainer = document.querySelector("#description-Reviews-container-container02")




mobile_nav.addEventListener("click",()=> toggleNavBar());


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }


  if(window.outerWidth > 1024){
    window.onscroll = function() {myFunctionNav()};
  
    var navbar = document.getElementById("nav-bar");
    var sticky = navbar.offsetTop;
    
    function myFunctionNav() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.style.backgroundColor = "white"
        navbar.style.marginTop = "-5px"
        navbar.style.border = "1px solid rgb(211, 211, 211)"
  
  
        
      } else {
        navbar.classList.remove("sticky");
        navbar.style.marginTop = "20px";
        navbar.style.border = "1px solid white"
  
    
      }
    }
  


  }


  document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const progressButton = document.getElementById('progress-button');
    const amountDisplay = document.getElementById('amount-value');

    let isDragging = false;

    function updateProgressBar(clientX) {
      const rect = progressBar.getBoundingClientRect();
      let buttonPosition = clientX - rect.left;
      buttonPosition = Math.max(0, Math.min(buttonPosition, rect.width));

      const percentage = (buttonPosition / rect.width) * 100;
      const amount = Math.round(percentage);
      progressButton.style.left = percentage + '%';
      amountDisplay.textContent = amount;
    }

    progressButton.addEventListener('mousedown', function (e) {
      e.preventDefault();
      isDragging = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });

    function handleMouseMove(e) {
      if (isDragging) {
        updateProgressBar(e.clientX);
      }
    }

    function handleMouseUp(e) {
      if (isDragging) {
        isDragging = false;
        updateProgressBar(e.clientX);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    }
  });

  if(window.outerWidth > 1024){
    let swiper = new Swiper(".mySwiper01", {
      loop:true,
      autoplay:true,
      autoplayTimeout:1000,
      // autoplayHoverPause : true,
      // effect : "coverflow",
      grabCursor : true,
      centeredSliders : true,
      slidesPerView : "auto",
      slidesPerView: 4,
      spaceBetween: 30,
      // coverflowEffect : {
      //   rotate : 0,
      //   stretch : 0,
      //   depth : 300,
      //   modifier : 1,
      //   sideShadows : false
  
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
  }
  else{
    let swiper = new Swiper(".mySwiper01", {
      loop:true,
      autoplay:true,
      autoplayTimeout:1000,
      // autoplayHoverPause : true,
      // effect : "coverflow",
      grabCursor : true,
      centeredSliders : true,
      slidesPerView : "auto",
      slidesPerView: 1,
      spaceBetween: 30,
      // coverflowEffect : {
      //   rotate : 0,
      //   stretch : 0,
      //   depth : 300,
      //   modifier : 1,
      //   sideShadows : false
  
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
  }

descriptionHeading.addEventListener("click",showDescription)
reviewsHeading.addEventListener("click",showReviews)

function showDescription(){
    descriptionHeading.style.color = "rgb(116, 197, 17)"
    reviewsHeading.style.color = "black"

    ReviewsContainer.style.display = "none"
    descriptionContainer.style.display = "block"


}

function showReviews(){
    descriptionHeading.style.color = "black"
    reviewsHeading.style.color = "rgb(116, 197, 17)"
    ReviewsContainer.style.display = "block"
    descriptionContainer.style.display = "none"

}