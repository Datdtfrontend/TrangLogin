/*register and login*/
const out = document.querySelector('.modal');
const out1 = document.querySelector('.modal__input')
const register = document.querySelector('.js-register');
const login = document.querySelector('.js-login');
const closeRegister = document.querySelector('.comeback');
const closeLogin = document.querySelector('.turnback');
const closeAll = document.querySelectorAll('.modal__overlay');
// mở khung đăng kí
function CallRegister(){
    out.classList.add('open');
}
// đóng khung đăng kí
function CallCloseRegister(){
    out.classList.remove('open');
}

function CallLogin(){
    out1.classList.add('open');
}
// hàm tắt khung đăng kí
function CallCloseLogin(){
    out1.classList.remove('open');
}

closeRegister.addEventListener('click', CallCloseRegister);
closeLogin.addEventListener('click', CallCloseLogin);


register.addEventListener('click', CallRegister);
login.addEventListener('click', CallLogin);

/*call history*/
const history = document.querySelector('.js-history')
const openhistory = document.querySelector('.js-open')
const closehistory = document.querySelector('.js-close')
function CallHistory(){
    openhistory.classList.add('open_history')
}
function CallClose(){
    openhistory.classList.remove('open_history')
}
history.addEventListener('click', CallHistory)
closehistory.addEventListener('click', CallClose)

/*file upload*/
const profile_pic = document.querySelector('.profile-pic')
const file_upload = document.querySelector('.file-upload')
const upload_button = document.querySelector('.upload-button')

file_upload.addEventListener('change',function() {
    if (this.files && this.files[0]) {
        profile_pic.onload = () => {
            URL.revokeObjectURL(profile_pic.src);  // no longer needed, free memory
        }
  
        profile_pic.src = URL.createObjectURL(this.files[0]); // set src to blob url
    }
});

upload_button.addEventListener('click', function() {
   file_upload.click();
});






