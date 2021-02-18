// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('js--nav-icon')) {
//     var dropdowns = document.getElementsByClassName("js--main-nav");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// var x = document.getElementsByTagName("nav")[0];
// function toggleNav() {
//   if (x.className === "") {
//     x.className = " openNav";
//     console.log("testingClicking")
//   } else {
//     x.className = "";
//     console.log("testingClicking")
//   }
// }
// document.querySelector(".js--nav-icons").addEventListener("click", toggleNav);

// $(window).resize(function(){

//   var nav = $('.js--main-nav');
  
//   var icon = $('.js--nav-icon i');
  
//   if ($(window).width() > 767){
  
//   nav.css("display", "block");
  
//   icon.addClass('ion-close-round');
  
//   icon.removeClass('ion-navicon-round');
  
//   } else {
  
//   nav.css("display", "none");
  
//   icon.addClass('ion-navicon-round');
  
//   icon.removeClass('ion-close-round');
  
//   }
  
//   });


//   onResize = function() {
//     if($(window).width() < 530) {
//         $('.js--main-nav').on('click', function() {
//           alert("testing");
//           nav.css("display", "block");
  
//           icon.addClass('ion-close-round');
          
//           icon.removeClass('ion-navicon-round');        
//         })
//     } else {
//         $('.js--main-nav').off('click');
//     }
// }

// $(document).ready(onResize);
// $(window).resize(onResize);