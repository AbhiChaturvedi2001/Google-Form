const messageUser = document.getElementById('description-area');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const maleGender = document.getElementById('gender-male');
const femaleGender = document.getElementById('gender-female');
const userNumber = document.getElementById('user-number');
const userMail = document.getElementById('user-mail');
const genders = document.getElementById('genders');
const submitBtn =document.querySelector('.submit-btn')
const ResetBtn = document.getElementById('reset-btn');

let cnt = 0;
const checkWord = () => {
    cnt > 49 ? alert(`Sorry we can't do anymore`) : cnt++;
    console.log(cnt)
}
const checkValidation = (e) => {
    e.preventDefault();
    if(firstName.value === "" || lastName.value === "" || userNumber.value === "" || userMail.value === "" || messageUser.value === "" || genders.value === ""){
        alert("please Enter the Full details");
    }
}

const removeElement = () => {
    firstName.value = "";
    lastName.value = "";
    userMail.value = "";
    userNumber.value = "";
    messageUser.value = "";
    genders.value = "";
    maleGender.value = "";
    femaleGender.value = "";
}

submitBtn.addEventListener("click", checkValidation);
ResetBtn.addEventListener("click", removeElement);