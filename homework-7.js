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
const table = document.querySelector('.styled-table')
const nameValue  = document.querySelector('.name');
const ageValue  = document.querySelector('.age');
const mailValue  = document.querySelector('.email');
const jobTitleValue  = document.querySelector('.job_title');
const addressValue  = document.querySelector('.address');
const skillsValue  = document.querySelector('.skills');

function getUserData() {
    const keySkills = userData.keySkills.join(', ')

    nameValue.textContent = `${userData.firstName} ${userData.secondName}`;
    ageValue.textContent = `${userData.age}`;
    mailValue.textContent = `${userData.email}`;
    jobTitleValue.textContent = `${userData.position}`;
    addressValue.textContent = `${userData.location.country}, ${userData.location.city}, ${userData.location.street}, ${userData.location.streetNumber}`;
    skillsValue.textContent = `${keySkills}`;
}

function buttonHandler() {
    table.style.display = 'flex'
    return getUserData()
};


submitButton.addEventListener("click", buttonHandler); 
