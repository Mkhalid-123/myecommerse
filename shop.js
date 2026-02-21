let inputs = document.querySelectorAll(".input");
let text = inputs[0];   // password
let email = inputs[1];  // email

// select buttons
let buttons = document.querySelectorAll(".btn1");
let loginBtn = buttons[0];
let forget = buttons[1];

// initialize localStorage
let h5 = document.querySelector("#h5");
localStorage.setItem("Name", "");
localStorage.setItem("Email", "");
text.type = "password";
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let t = text.value;
    let e1 = email.value;
    if (localStorage.getItem("Name") == "" && localStorage.getItem("Email") == "") {
        text.value = "";
        email.value = "";
        h5.style.color = "green"
        h5.innerHTML = "your are succefully login"

        setInterval(() => {
            h5.innerHTML = ""
        }, 5000)

        localStorage.setItem("Name", t);
        localStorage.setItem("Email", e1);

    } else if (localStorage.getItem("Name") == t && localStorage.getItem("Email") == e1) {
        text.value = "";
        email.value = "";
        h5.style.color = "green"
        h5.innerHTML = "your are succefully login"
        setInterval(() => {
            h5.innerHTML = ""
        }, 9000)

    } else if (localStorage.getItem("Name") != t && localStorage.getItem("Email") != e1) {
        text.style.color = "red";
        email.style.color = "red";
        text.value = "incorrect";
        email.value = "incorrect";

    } else if (localStorage.getItem("Name") != t) {
        text.style.color = "red";
        text.type = "text";
        text.value = "incorrect";

    } else if (localStorage.getItem("Email") != e1) {
        email.style.color = "red";
        email.value = "incorrect";
    }
});

forget.addEventListener("click", () => {
    text.value = "";
    email.value = "";
    h5.style.color = "red"
    h5.innerHTML = "your password is forget"
    setInterval(() => {
        h5.innerHTML = ""
    }, 5000)
    localStorage.clear();
    localStorage.setItem("Name", "");
    localStorage.setItem("Email", "");
});
let l = document.querySelector("#login");
let p = document.querySelector("p1");
p.addEventListener("click", () => {
   l.style.visibility="visible";
})
document.querySelector("#cross").addEventListener("click", () => {
    l.style.visibility="hidden";
})
let shop = document.querySelector("sup");
let save;
window.onload= ()=>{
     save=localStorage.getItem('count');
     shop.innerText=save;
} 
console.log(JSON.parse( localStorage.getItem("back")));
let save2 = Number(save);
console.log(save);
// for(let  i = 0 ; i<save ; i++){
//      console.log("i");
// }
