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
let newprice=Number(sessionStorage.getItem("price"));
let shop = document.querySelector("sup");
let save;
let shop2 = document.querySelector("#shoping");
save= sessionStorage.getItem('count');
     shop.innerText=save;
     let save2 = Number(save);
let background= JSON.parse(sessionStorage.getItem("back"));
for(let i = 0 ; i < save2;i++){
    let eachp=JSON.parse(sessionStorage.getItem('eachp'));
    let each = eachp[i];
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  div1.style.width="200px"
  let btn=document.createElement("button");
  btn.innerText="delete";

  div1.appendChild(div2);
  div1.appendChild(btn);
  btn.style.height="30px"
  div2.style.width="115px";
  div2.style.height="70px ";
  div1.style.margin='1px'
  div2.style.backgroundImage=background[i];
  div2.style.backgroundSize="100% 100%";
  shop2.appendChild(div1);
  div1.style.display="flex";
  div1.style.justifyContent="spacebetween";
  div1.style.width="100%";
  div1.style.paddingLeft="1%"
  div1.style.paddingRight="1%"
  btn.addEventListener("click",()=> {
    div1.remove();
    newprice=newprice-each;
   let newp= parseInt(sessionStorage.getItem('price'));
    newp= newp-each;

    sessionStorage.setItem('price',newp);
    shop1.innerText=newprice;
    total=total-each;
    t.innerText=total;
        if(newp===0){
        s.innerText='0.00';
        t.innerText='0.00';
        console.log(t.innerText)
    }
    for(let i =0;i<background.length;i++){   
   if (div2.style.backgroundImage===background[i]){
    background.splice(i,1);
    sessionStorage.setItem('back',JSON.stringify(background)); 
    save--;
    sessionStorage.setItem("count",save);
    shop.innerText=save;
   }
   
}

})
}

let shop1= document.querySelector('#shop1').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
shop1.innerText=newprice;
let  s=document.querySelector("#shop1").firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
if(background.length>=1){
s.innerText='100';
} if(background.length>2){
    s.innerText='200';
} else if (background.length===0){
    s.innerText='0.00';
}
let total = parseInt(shop1.innerText)+parseInt(s.innerText);
let t = document.querySelector("#shop1").firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
if(background.length===0){
t.innerText='0';
console.log(t.innerText)
} else {
t.innerText=total;
}


