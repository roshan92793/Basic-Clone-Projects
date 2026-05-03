const task = [];

let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
    "input [placeholder='https://example.com/photo.jpg']"
);
const fullNameInput = form.querySelector(
    "input [placeholder='Enter full name']"
);
const homeTownInput = form.querySelector(
     "input [placeholder='Enter home town']"
);
const purposeInput = form.querySelector(
    "input [placeholder='e.g., Quick appointment note']"
);
const categoryRadios = form.querySelectorAll("input [name='category']");

const submitButton = form.querySelector(".submit-btn");

function saveToloacal(obj){
    if(localStorage.getItem("tasks") === null){
        let oldtasks =[];
        oldtasks.push(obj);
        localStorage.setItem("oldTasks", JSON.stringify(oldTasks));
    }
    else{
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
}

addNote.addEventListener("click", function () {
    formContainer.style.display = "initial";
});
closeForm.addEventListener("click", function () {
    formContainer.style.display = "none";
});
form.addEventListener("submit", function(evt){
    evt.preventDefault();
    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();
    let selected = false;
    categoryRadios.forEach(function(cat){
        if(cat.checked){
            selected = cat.value;
        }
    })
    if(imageUrl.value.trim() === "")
    {
        alert("Please enter an Image url");
        return;
    }
    if(fullName.value.trim() === "")
    {
        alert("Please enter the Full Name");
        return;
    }
    if(homeTown.value.trim() === "")
    {
        alert("Please enter an Home Town");
        return;
    }
    if(purpose.value.trim() === "")
    {
        alert("Please enter Purpose");
        return;
    }
    if(!selected){
        alert("Please select the category");
        return;
    }
    saveToloacal({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        selected,
    });
    form.reset();
    formContainer.style.display = "none";
});
