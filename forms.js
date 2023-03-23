let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "male"
}

let slect = document.getElementById("slect");
slect.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(formData)
});

let genderEl = document.getElementById("maleId")
genderEl.addEventListener("change",function(){
    formData.gender = event.target.value;
})


let genderEl2 = document.getElementById("femaleId")
genderEl2.addEventListener("change",function(){
    formData.gender = event.target.value;
})




let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});