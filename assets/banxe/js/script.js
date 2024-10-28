const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const note = document.getElementById("note")
const phone = document.getElementById("phone")

function login(){
    event.preventDefault();
    let u = fullname.value.trim()
    let n = note.value.trim()
    let p = phone.value.trim()
    let e = email.value.trim()
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (u === '' || p === '' || n === '' || e === '') {
        alert('Vui lòng không bỏ trống thông tin')
    }
    else if (!emailPattern.test(e)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.")
    }
    else {
        alert(
            "Gửi thông tin tư vấn thành công"
        )
    }

}

