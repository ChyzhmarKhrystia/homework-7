const userData = {
    firstName: "John",
    secondName: "Smith",
    age: "35",
    email: "js@gmail.com",
    position: "Director",
    
    location: {
        country: "Ukraine",
        city: "Kyiv",
        street: "Dehtarna",
        streetNumber: "11"
    },

    keySkills: [
        "Team Management",
        "Scope Management",
        "Planning",
        "Estimations"
    ]
};


const submitButton = document.querySelector('.form-button');
const nameValue  = document.querySelector('.name');
const ageValue  = document.querySelector('.age');
const mailValue  = document.querySelector('.email');
const jobTitleValue  = document.querySelector('.job_title');
const addressValue  = document.querySelector('.address');
const skillsValue  = document.querySelector('.skills');


function buttonHandler() {
    nameValue.textContent = `${userData.firstName} ${userData.secondName}`;
    ageValue.textContent = `${userData.age}`;
    mailValue.textContent = `${userData.email}`;
    jobTitleValue.textContent = `${userData.position}`;
    addressValue.textContent = `${userData.location.country}, ${userData.location.city}, ${userData.location.street}, ${userData.location.streetNumber}`;
    skillsValue.textContent = `${userData.keySkills}`;
	return console.log(userData);
};


// додавання на нашу кнопку Event Listener, який буде реагувати на click по кнопці, а також викликати функцію buttonHandler
submitButton.addEventListener("click", buttonHandler); 
