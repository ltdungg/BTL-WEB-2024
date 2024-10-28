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


// Hiện ra tư vấn khi bấm vào message

const msgBtn = document.querySelector('.contact-us')
const msgOverlay = document.getElementsByClassName('message__box_overlay')
const msgBox = document.getElementsByClassName('message__box_contact')
const closeBtn = document.querySelector('.x-close')

msgBtn.addEventListener("click", () => {
  msgBox[0].style.display = "block"
  msgOverlay[0].style.display = "block"
})

msgOverlay[0].addEventListener("click", () => {
  if (msgOverlay[0].style.display === "block") {
    msgBox[0].style.display = "none"
    msgOverlay[0].style.display = "none"
  }
})

closeBtn.addEventListener("click", () => {
  msgBox[0].style.display = "none"
  msgOverlay[0].style.display = "none"
})

// Đăng ký nhận thông tin mới nhận

const email = document.getElementsByClassName("subcribe-email")
const error = document.getElementById("error-message")

function emailValidate() {
    event.preventDefault()
    e = email[0].value.trim()
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (e === "") {
        error.textContent = "Vui lòng nhập thông tin email"
    }
    else if (!regex.test(e)) {
        error.textContent = "Email không hợp lệ"
        email[0].value = ''
    }
}

// Yêu cầu tư vấn

const phone = document.getElementById("phone")
const fullName = document.getElementById("full-name")
const contactError = document.getElementsByClassName("message__box_error")

function required() {
    event.preventDefault()
    p = phone.value.trim()
    f = fullName.value.trim()
    let regex = /^(09|03|07|08|05)+([0-9]{8})\b/g
    if (p === '' || f === '') {
        contactError[0].textContent = "Vui lòng không để trống thông tin"
    }
    else if (!regex.test(p)) {
        contactError[0].textContent = "Số điện thoại không hợp lệ"
        phone.value = ''
        fullName.value = ''
    }
    else {
        msgBox[0].style.display = "none"
        msgOverlay[0].style.display = "none"
        alert("Bạn đã gửi yêu cầu tư vấn thành công")
    }
}

