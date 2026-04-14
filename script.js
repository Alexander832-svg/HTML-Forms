function start() {
     let form = document.querySelector("form");
    form.addEventListener("submit", processForm);
}


function processForm(event) {
        event.preventDefault();
            
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let color = document.getElementById("color").value;
            
    let text = firstname + " " + lastname + " " + email + " " + birthdate;
    addParagraph(text, color);
        }

function addParagraph(text, color) {
    let p = document.createElement("p");
    p.textContent = text;
    p.style.backgroundColor = color;
    document.body.appendChild(p);
}