(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {

      if (support == true) {
         document.querySelector('html').classList.add('webp');
      } else {
         document.querySelector('html').classList.add('no-webp');
      }
   });
})()

// burger
const body = document.querySelector('body')
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__list')
const header = document.querySelector('.header-main')



// about page stats
const stats = document.querySelector('.aboutSection.statistics') // Первый блок
const contacts = document.querySelector('.aboutSection.contacts') // Первый блок
let statsCoord, contactsCoord;
// Координаты
if (stats && contacts) {
   statsCoord = stats.getBoundingClientRect().top;              // Получение позиции блока относительно позиции скролла 
   contactsCoord = contacts.getBoundingClientRect().top;              // Получение позиции блока относительно позиции скролла 
}


// about page stats
function statsCount(a) {
   if (a > statsCoord && a < contactsCoord && !(stats.classList.contains("done"))) {
      const statsItems = document.querySelectorAll('.statistics__item');
      if (statsItems.length > 0) {
         function showValue(index, maxValue) {
            let value = 0;
            let allTime = 1800;
            let intervalTime = allTime / (maxValue);
            let timerId = setInterval(() => {
               value++;
               if (value == maxValue) {
                  clearInterval(timerId)
               }
               statsItems[index].querySelector("#statsCount").innerHTML = value;
            }, intervalTime)
         }
         for (let i = 0; i < statsItems.length; i++) {
            showValue(i, statsItems[i].id)
            stats.classList.add("done")
         }
      }
   }
}
// burger
function workBurger() {
   burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      header.classList.toggle("active")
      menu.classList.toggle("active");
      body.classList.toggle("lock");
   })
}

// main page button "show more"
function showMoreBtn() {
   const upcomingBtn = document.querySelector('.upcoming__btn')
   const upcomingCards = document.querySelectorAll('.upcoming__card')
   if (upcomingBtn && upcomingCards) {
      upcomingBtn.addEventListener("click", () => {
         if (upcomingBtn.classList.contains("show")) {
            upcomingBtn.classList.remove("show")
            upcomingBtn.classList.add("hide")
            for (let i = 0; i < upcomingCards.length; i++) {
               let card = upcomingCards[i];
               card.classList.remove("hidden")
            }
         } else {
            upcomingBtn.classList.remove("hide")
            upcomingBtn.classList.add("show")
            for (let i = 0; i < upcomingCards.length; i++) {
               if (i > 2) {
                  let card = upcomingCards[i];
                  card.classList.add("hidden")
               }
            }
         }
      })
   }

}

//main page Slider
if (document.querySelector('.team-slider')) {
   $(document).ready(function () {
      $('.team-slider').slick({
         arrows: false,
         slidesToScroll: 1,
         slidesToShow: 4.2,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [{
            breakpoint: 769,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 601,
            settings: {
               slidesToShow: 2.5,
            }
         },
         {
            breakpoint: 501,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 400,
            settings: {
               slidesToShow: 1.5,
            }
         },
         {
            breakpoint: 330,
            settings: {
               slidesToShow: 1,
            },
         }
         ],
      });
   });
}
//main page Slider
if (document.querySelector('.gallery-slider')) {
   $(document).ready(function () {
      $('.gallery-slider').slick({
         arrows: false,
         slidesToScroll: 1,
         slidesToShow: 1.4,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [{
            breakpoint: 769,
            settings: {
               dots: true,
            }
         },
         {
            breakpoint: 601,
            settings: {
               slidesToShow: 1.1,
               dots: true,
            }
         },
         ],
      });
   })
};
// main page spoilers
if (document.querySelectorAll('.faq-item__title').length > 0) {
   $(document).ready(function () {
      $('.faq-item__title').click(function (event) {
         $(this).toggleClass("active").next().slideToggle(300);
      })
   })
}
// about page animation
new WOW().init();
document.addEventListener("DOMContentLoaded", () => {
   let posTop = window.pageYOffset; // Получение позиции скролла
   statsCoord += posTop;             // Получение точных координат блоков
   contactsCoord += posTop;             // Получение точных координат блоков

   statsCount(posTop)
   workBurger()
   showMoreBtn()
})
document.addEventListener("scroll", () => {
   let posTop = window.pageYOffset; // Получение позиции скролла
   statsCount(posTop)
})
// Секции
/*
const stats = document.querySelector('.aboutSection.statistics') // Первый блок
const contacts = document.querySelector('.aboutSection.contacts') // Первый блок

// Координаты
if (stats && contacts) {
   let statsCoord = stats.getBoundingClientRect().top;              // Получение позиции блока относительно позиции скролла 
   let contactsCoord = contacts.getBoundingClientRect().top;              // Получение позиции блока относительно позиции скролла 
}
document.addEventListener("DOMContentLoaded", () => {
   let posTop = window.pageYOffset; // Получение позиции скролла
   statsCoord += posTop;             // Получение точных координат блоков
   contactsCoord += posTop;             // Получение точных координат блоков

   statsCount(posTop)
   workBurger()
   showMoreBtn()
})
document.addEventListener("scroll", () => {
   let posTop = window.pageYOffset; // Получение позиции скролла
   statsCount(posTop)
})

// about page stats
function statsCount(a) {
   if (a > statsCoord && a < contactsCoord && !(stats.classList.contains("done"))) {
      const statsItems = document.querySelectorAll('.statistics__item');
      if (statsItems.length > 0) {
         function showValue(index, maxValue) {
            let value = 0;
            let allTime = 1800;
            let intervalTime = allTime / (maxValue);
            let timerId = setInterval(() => {
               value++;
               if (value == maxValue) {
                  clearInterval(timerId)
               }
               statsItems[index].querySelector("#statsCount").innerHTML = value;
            }, intervalTime)
         }
         for (let i = 0; i < statsItems.length; i++) {
            showValue(i, statsItems[i].id)
            stats.classList.add("done")
         }
      }
   }
}
*/
