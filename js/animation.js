// let currentBookId = 1;
// let isAtLastSlide,
//   currentSlideOffsetWidth = 0;

// const moveRightbtn = document.getElementById("move-right");
// moveRightbtn.addEventListener("click", moveSlideToRight);

// function checkCurrentSlideIndex() {
//   if (!currentBookId > 10) {
//     return true;
//   }
//   return false;
// }
// /*
//     Remove animations, used to display in active state, applied on a book's title,body, buttons
// */
// function removeEffectsOnPrev() {
//   //get previous book id inlcuding title,body,Call To Action (CTA) buttons
//   let prevBookId = currentBookId - 1;
//   let prevTitle = document.getElementById(`tb-title-${prevBookId}`);
//   let prevBody = document.getElementById(`tb-body-${prevBookId}`);
//   let prevCTAButtons = document.getElementById(`tb-cta-btn-${prevBookId}`);

//   //remove slide-up effect on title,body, (CTA) buttons
//   // add slide-down to pull down title,body,buttons since they've already displayed
//   [prevTitle, prevBody, prevCTAButtons].map((prevBook) => {
//     prevBook.classList.remove("slide-up");
//     prevBook.classList.add("slide-down");
//   });
// }

// /*
//     Add animations for active state to titles, body, and buttons
// */
// function addEffectonCurrent() {
//   //add slide-up effect on title,body, (CTA) buttons
//   let currentTitle = document.getElementById(`tb-title-${currentBookId}`);
//   let currentBody = document.getElementById(`tb-body-${currentBookId}`);
//   let currentCTAButtons = document.getElementById(
//     `tb-cta-btn-${currentBookId}`
//   );

//   //remove slide-down effect on title,body, (CTA) buttons since they are about to be in active state
//   // add slide-up effect to display a book's info
//   [currentTitle, currentBody, currentCTAButtons].map((currentBook) => {
//     currentBook.classList.remove("slide-down");
//     currentBook.classList.add("slide-up");
//   });

//   isAtLastSlide = checkCurrentSlideIndex();
//   //   if (isAtLastSlide) {
//   //   }
// }

// //
// function moveTrendingSlide() {
//   let trendingBookSlider = document.getElementById("trending-books-slider");
//   let prevBook = document.getElementById(`trending-book-${currentBookId - 1}`);
//   let nextBook = document.getElementById(`trending-book-${currentBookId}`);

//   //   currentSlideOffsetWidth += prevBook.offsetWidth + 32;

//   trendingBookSlider.scrollLeft =
//     trendingBookSlider.scrollLeft + prevBook.offsetWidth;

//   console.log(trendingBookSlider.scrollLeft);

//   prevBook.firstElementChild.classList.remove("book-rotate");
//   prevBook.firstElementChild.classList.add("book-origin");

//   nextBook.firstElementChild.classList.remove("book-origin");
//   nextBook.firstElementChild.classList.add("book-rotate");
// }

// function moveSlideToRight() {
//   currentBookId += 1;
//   //   removeEffectsOnPrev();
//   //   addEffectonCurrent();
//   moveTrendingSlide();
// }

// const bf1 = document.getElementById("bf-1");
// bf1.childNodes[3].style.wdith = "40%";
// console.log(bf1.childNodes[3].style);

const header = document.getElementById("header");

