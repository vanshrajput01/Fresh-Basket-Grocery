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

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });