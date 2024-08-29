let signupbtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameFeild = document.querySelector('.nameFeild');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text')
signInBtn.addEventListener('click', () => {
    nameFeild.style.maxHeight = '0';
    title.innerHTML = 'sing In';
    text.innerHTML = 'lost password';
    signupbtn.classList.add('disiable');
    signInBtn.classList.remove('disiable');
    underline.style.transform = 'translateX(35px)';
});


signupbtn.addEventListener('click', () => {
    nameFeild.style.maxHeight = '60px';
    title.innerHTML = 'sing up';
    text.innerHTML = 'password saggestions';
    signupbtn.classList.remove('disiable');
    signInBtn.classList.add('disiable');
    underline.style.transform = 'translateX(0)';
})


