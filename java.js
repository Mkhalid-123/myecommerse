// select inputs (first = password, second = email)
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
// card section
let btn = document.querySelectorAll(".btn");
let pic = document.querySelector("#pic");
let card = document.querySelector("#card");
let cofcard = document.querySelector("n");
let v = document.querySelectorAll("v");
let v1 = document.querySelectorAll(".v1");
v.forEach((e) => {
    e.addEventListener("click", () => {
        document.body.style.overflow = "hidden"
        v1.forEach((e1) => {
            e1.classList.remove("v1");
            e1.classList.add("a")
        })
        btn.forEach((b) => {
            b.classList.remove("btn")
            b.classList.add("a")

        })
        card.style.display = "block"
        card.style.zIndex = "10"
        let img = e.parentElement.parentElement.nextElementSibling;
        let npci = getComputedStyle(img).backgroundImage;
        pic.style.backgroundImage = npci;
        pic.style.backgroundSize = "100% 100%"
    })
})
cofcard.addEventListener("click", () => {
    card.style.display = "none"
    document.body.style.overflow = "auto"
    btn.forEach((b) => {
        b.classList.remove("a");
        b.classList.add("btn");
    })
    v1.forEach((e1) => {
        e1.classList.add("v1");
        e1.classList.remove("a")

    })

})
let buybtn = document.querySelectorAll("#buybtn");
buybtn.forEach((b) => {
    b.style.backgroundColor = "blue"
    b.style.color = "white"
})


