let url  = "https://coding-week-2024-api.onrender.com/api/data";

let poppupCon = document.querySelector(".popup-container");
let poppupbtn = document.querySelector(".popup-btn");

poppupbtn.addEventListener("click",() => {
    poppupCon.classList.add("hide");
});

//sorry all of you, kyuki mene loops ko use nahi kiya ....mene task 1 aise hi nama diye tha to usme modification karne ke chakkar me aisa sa kucch  karna pada




                                // section 1 ...........




//box1
let box1 = document.querySelector(".box1");
let headLine1 = document.querySelector("#headline1");
let date1 = document.querySelector("#date1");
let author1 = document.querySelector("#author1");
let type1 = document.querySelector("#type1");


//box1-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine1.innerText = data[0].headline;
    date1.innerText = data[0].date;
    author1.innerText = data[0].author;
    type1.innerText = data[0].type;
    box1.addEventListener("click",() => {
        poppupCon.innerText = data[0].content;
        poppupCon.classList.remove("hide");
    });

})();

//box2
let box2 = document.querySelector(".box2");
let headLine2 = document.querySelector("#headline2");
let date2 = document.querySelector("#date2");
let author2 = document.querySelector("#author2");
let type2 = document.querySelector("#type2");


//box2-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine2.innerText = data[1].headline;
    date2.innerText = data[1].date;
    author2.innerText = data[1].author;
    type2.innerText = data[1].type;
    box2.addEventListener("click",() => {
        poppupCon.innerText = data[1].content;
        poppupCon.classList.remove("hide");
    });
})();


// //box31
let box31 = document.querySelector(".box31");
let headLine31 = document.querySelector("#headline31");
let date31 = document.querySelector("#date31");
let author31 = document.querySelector("#author31");
let type31 = document.querySelector("#type31");


// //box31-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine31.innerText = data[2].headline;
    date31.innerText = data[2].date;
    author31.innerText = data[2].author;
    type31.innerText = data[2].type;
    box31.addEventListener("click",() => {
        poppupCon.innerText = data[2].content;
        poppupCon.classList.remove("hide");
    });
})();


//box32
let box32 = document.querySelector(".box32");
let headLine32 = document.querySelector("#headline32");
let date32 = document.querySelector("#date32");
let author32 = document.querySelector("#author32");
let type32 = document.querySelector("#type32");


//box32-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine32.innerText = data[3].headline;
    date32.innerText = data[3].date;
    author32.innerText = data[3].author;
    type32.innerText = data[3].type;
    box32.addEventListener("click",() => {
        poppupCon.innerText = data[3].content;
        poppupCon.classList.remove("hide");
    });

})();





                            //section 2 ...........





//box41
let box41 = document.querySelector(".box41");
let headLine41 = document.querySelector("#headline41");
let date41 = document.querySelector("#date41");


//box41-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine41.innerText = data[4].headline;
    date41.innerText = data[4].date;
    box41.addEventListener("click",() => {
        poppupCon.innerText = data[4].content;
        poppupCon.classList.remove("hide");
    });

})();

//box41
let box42 = document.querySelector(".box42");
let headLine42 = document.querySelector("#headline42");
let date42 = document.querySelector("#date42");


//box41-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine42.innerText = data[5].headline;
    date42.innerText = data[5].date;
    box42.addEventListener("click",() => {
        poppupCon.innerText = data[5].content;
        poppupCon.classList.remove("hide");
    });

})();

//box43
let box43 = document.querySelector(".box43");
let headLine43 = document.querySelector("#headline43");
let date43 = document.querySelector("#date43");


//box43-pe-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine43.innerText = data[6].headline;
    date43.innerText = data[6].date;
    box43.addEventListener("click",() => {
        poppupCon.innerText = data[6].content;
        poppupCon.classList.remove("hide");
    });

})();



//box44
let box44 = document.querySelector(".box44");
let headLine44 = document.querySelector("#headline44");
let date44 = document.querySelector("#date44");


//box44-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine44.innerText = data[7].headline;
    date44.innerText = data[7].date;
    box44.addEventListener("click",() => {
        poppupCon.innerText = data[7].content;
        poppupCon.classList.remove("hide");
    });

})();

//box45
let box45 = document.querySelector(".box45");
let headLine45 = document.querySelector("#headline45");
let date45 = document.querySelector("#date45");


//box45-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine45.innerText = data[8].headline;
    date45.innerText = data[8].date;
    box45.addEventListener("click",() => {
        poppupCon.innerText = data[8].content;
        poppupCon.classList.remove("hide");
    });

})();
//box46
let box46 = document.querySelector(".box46");
let headLine46 = document.querySelector("#headline46");
let date46 = document.querySelector("#date46");


//box46-work

( async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    headLine46.innerText = data[9].headline;
    date46.innerText = data[9].date;
    box46.addEventListener("click",() => {
        poppupCon.innerText = data[9].content;
        poppupCon.classList.remove("hide");
    });

})();











