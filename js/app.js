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
//button "show more"
function showMoreBtn(btnSelector, itemsSelector) {
   const showMoreBtn = document.querySelector(`${btnSelector}`)
   const items = document.querySelectorAll(`${itemsSelector}`)
   if (showMoreBtn && items) {
      showMoreBtn.addEventListener("click", () => {
         if (showMoreBtn.classList.contains("show")) {
            showMoreBtn.classList.remove("show")
            showMoreBtn.classList.add("hide")
            for (let i = 0; i < items.length; i++) {
               let item = items[i];
               item.classList.remove("hidden")
            }
         } else {
            showMoreBtn.classList.remove("hide")
            showMoreBtn.classList.add("show")
            for (let i = 0; i < items.length; i++) {
               if (i > 2) {
                  let item = items[i];
                  item.classList.add("hidden")
               }
            }
         }
      })
   }

}
// Payment page
function inputValidate() {
   const inputs = document.querySelectorAll('.payment-main input');
   const btn = document.querySelector('.payment-card__btn')
   if (inputs) {
      inputs.forEach((input) => {
         input.addEventListener("change", () => {
            if (input.value) {
               input.classList.add("filled")
            } else {
               input.classList.remove("filled")
            }
         })
      })
   }
   if (btn) {
      btn.addEventListener("click", () => {
         for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            input.classList.remove("nofilled")
            if (!(input.value)) {
               input.classList.add("nofilled")
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
   showMoreBtn(".upcoming__btn", '.upcoming__card')
   showMoreBtn(".teachers__more", '.hide-and-seek')
   inputValidate()
})
document.addEventListener("scroll", () => {
   let posTop = window.pageYOffset; // Получение позиции скролла
   statsCount(posTop)
})
// progs page sliders
if (document.querySelectorAll('.progs__slider').length > 0 && window.innerWidth <= 768) {
   $(document).ready(function () {
      $('.progs__slider').slick({
         arrows: false,
         slidesToShow: 3,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [{
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1.8,
            }
         },
         {
            breakpoint: 376,
            settings: {
               slidesToShow: 1.5,
            }
         }
         ],
      });
   })
}
if (document.querySelectorAll('.progsSection-place__slider').length > 0 && window.innerWidth <= 768) {
   $(document).ready(function () {
      $('.progsSection-place__slider').slick({
         arrows: false,
         slidesToShow: 3,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [{
            breakpoint: 610,
            settings: {
               slidesToShow: 2.3,
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 375,
            settings: {
               slidesToShow: 1.5,
            }
         },
         ],
      });
   })
}
if (document.querySelectorAll('.progsSection-team__slider').length > 0 && window.innerWidth <= 768) {
   $(document).ready(function () {
      $('.progsSection-team__slider').slick({
         arrows: false,
         slidesToShow: 3,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [{
            breakpoint: 610,
            settings: {
               slidesToShow: 2.3,
            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 375,
            settings: {
               slidesToShow: 1.5,
            }
         },
         ],
      });
   })
}
if (document.querySelectorAll('.wait-fun__slider').length > 0 && window.innerWidth <= 768) {
   $(document).ready(function () {
      $('.wait-fun__slider').slick({
         arrows: false,
         slidesToShow: 2,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [
            {
               breakpoint: 400,
               settings: {
                  slidesToShow: 1.5,
               }
            },
         ],
      });
   })
}
if (document.querySelectorAll('.wait-morning__slider').length > 0 && window.innerWidth <= 768) {
   $(document).ready(function () {
      $('.wait-morning__slider').slick({
         arrows: false,
         slidesToShow: 2.5,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [
            {
               breakpoint: 400,
               settings: {
                  slidesToShow: 1.5,
               }
            },
         ],
      });
   })
}
if (document.querySelectorAll('.wait-day__slider').length > 0 && window.innerWidth <= 768) {
   $(document).ready(function () {
      $('.wait-day__slider').slick({
         arrows: false,
         slidesToShow: 4,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [
            {
               breakpoint: 605,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 400,
               settings: {
                  slidesToShow: 1.5,
               }
            },
         ],
      });
   })
}
if (document.querySelectorAll('.wait-afternoon__slider').length > 0 && window.innerWidth <= 768) {
   $(document).ready(function () {
      $('.wait-afternoon__slider').slick({
         arrows: false,
         slidesToShow: 4,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         responsive: [
            {
               breakpoint: 605,
               settings: {
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 400,
               settings: {
                  slidesToShow: 1.5,
               }
            },
         ],
      });
   })
}
if (document.querySelectorAll('.transfer__slider').length > 0 && window.innerWidth <= 768) {
   $(document).ready(function () {
      $('.transfer__slider').slick({
         arrows: false,
         slidesToShow: 2.2,
         infinite: false,
         swipe: true,
         draggable: true,
         touchMove: true,
         variableWidth: true,
         responsive: [
            {
               breakpoint: 605,
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
         ],
      });
   })
}
// main page hero slider
if (document.querySelectorAll('.hero-slider').length > 0) {
   $(document).ready(function () {
      $('.hero-slider').slick({
         arrows: false,
         slidesToShow: 1,
         infinite: true,
         swipe: false,
         draggable: false,
         touchMove: false,
         autoplay: true,
         autoplaySpeed: 5000,
         fade: true,
         // adaptiveHeight: true
      });
   })
}


// const priceList = document.querySelectorAll('.price__list');
// const priceSublist = document.querySelectorAll('.price__sublist');
/*
const priceBtn = document.querySelectorAll('.price__list button');
priceBtn.forEach((event) => {
   event.addEventListener("click", () => {
      let btn = event;
      const priceList = document.querySelector(`.price__list#${btn.id}`);
      const priceSublist = document.querySelector(`.price__sublist#${btn.id}`);
      if (priceSublist.classList.contains("hidden")) { // ОТкрываем
         btn.classList.add("active")
         priceSublist.classList.remove("hidden")
         priceList.classList.add("active")

         let subItems = priceSublist.querySelectorAll(".price__subitem input");
         subItems.forEach((event) => {
            let subItem = event;
            subItem.addEventListener("click", () => {
               // Закрываем список
               btn.classList.remove("active")
               priceSublist.classList.add("hidden")
               priceList.classList.remove("active")
               console.log(subItem);
               // Забираем id
               // Перебираем элемента основного списка
               let items = priceList.querySelectorAll(".price__item input");
               items.forEach((item) => {
                  // console.log(item);
                  // item.classList.remove("checked")
                  // Нужному элементу даем класс checked
                  if (item.id == subItem.id) {
                     // item.classList.add("checked")
                     console.log(item.id);
                  }
               })
            })
         })

      } else { // Закрываем список
         btn.classList.remove("active")
         priceSublist.classList.add("hidden")
         priceList.classList.remove("active")
      }
   })
})
*/