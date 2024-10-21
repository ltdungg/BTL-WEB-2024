const carousel = document.querySelector('.slider-container')

firstDiv = carousel.querySelectorAll('.car')[0];

let firstCarDivWidth = firstDiv.clientWidth + 10
let scrollWidth = carousel.scrollWidth - carousel.clientWidth

carNextButton = document.querySelector('.next-btn')
carPrevButton = document.querySelector('.prev-btn')

const showHideIcon = () => {
  if (carousel.scrollLeft == 0) {
    carPrevButton.style.display = "none";
  }
  else {
    carPrevButton.style.display = "block";
  }
}

carNextButton.addEventListener("click", () => {
  carousel.scrollLeft += firstCarDivWidth;
  showHideIcon();
})

carPrevButton.addEventListener("click", () => {
  carousel.scrollLeft -= firstCarDivWidth;
  showHideIcon()
})

const brandCarousel = document.querySelector('.brand-container')
brandNextButton = document.querySelector('.brand-next-btn')
brandPrevButton = document.querySelector('.brand-prev-btn')

firstBrandDiv = brandCarousel.querySelectorAll('.brand-card')[0];

let firstBrandDivWidth = firstCarDivWidth.clientWidth;



const showHideIcon2 = () => {
  if (brandCarousel.scrollLeft == 0) {
    brandPrevButton.style.display = "none";
  }
  else {
    brandPrevButton.style.display = "block";
  }
}

brandNextButton.addEventListener("click", () => {
  brandCarousel.scrollLeft += firstBrandDiv.clientWidth + 20;
  showHideIcon2();
})

brandPrevButton.addEventListener("click", () => {
  brandCarousel.scrollLeft -= firstBrandDiv.clientWidth + 20;
  showHideIcon2();
})



