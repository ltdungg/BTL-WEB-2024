const email = document.getElementsByClassName("subcribe-email")
let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const error = document.getElementById("error-message")

function emailValidate() {
    event.preventDefault()
    e = email[0].value.trim()

    if (e === "") {
        error.textContent = "Vui lòng nhập thông tin email"
    }
    else if (!regex.test(e)) {
        error.textContent = "Email không hợp lệ"
        email[0].value = ''
    }
}