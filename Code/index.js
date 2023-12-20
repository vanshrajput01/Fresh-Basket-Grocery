const mobile_nav = document.querySelector('.mobile-navbar-btn')
const navHeader = document.querySelector('.header');

const toggleNavBar = () =>{

  navHeader.classList.toggle("active")
  
};

mobile_nav.addEventListener("click",()=> toggleNavBar());











let productbtn01 = document.querySelector("#our-products-container01-btn01")

let productbtn02 = document.querySelector("#our-products-container01-btn02")

let productbtn03 = document.querySelector("#our-products-container01-btn03")

let fruitsContainer = document.querySelector("#our-products-container02-fruits-container")

let vegetableContainer = document.querySelector("#our-products-container02-vegetables-container")

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


// Product container reated logic

productbtn01.addEventListener("click",showproduct01)
productbtn02.addEventListener("click",showproduct02)
productbtn03.addEventListener("click",showproduct03)

function showproduct01(){
  vegetableContainer.style.visibility =  "inherit"
  fruitsContainer.style.visibility = "inherit"
  vegetableContainer.style.marginTop = "40px"
}


function showproduct02(){
  vegetableContainer.style.visibility =  "inherit"
  vegetableContainer.style.marginTop = "-430px"
  fruitsContainer.style.visibility = "hidden"
}

function showproduct03(){
  vegetableContainer.style.visibility =  "hidden"
  // vegetableContainer.style.marginTop = "-430px"
  fruitsContainer.style.visibility = "inherit"
}


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
