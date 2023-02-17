let count = 1;

const showData = ()=>{
    setTimeout(() => {
        count++;
        getComments(count);
    }, 3000);
}

window.addEventListener("scroll", () => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight-5){
        showData();
    }
});


let commentsData;

async function getComments(count) {
    let data = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${count}&_limit=12`);
    commentsData = await data.json();
    console.log(count, commentsData);
    appendCommentsToUI(commentsData);
}

getComments(count);

function appendCommentsToUI(commentsData) {
    commentsData.forEach(function (ele, index) {
        let div = document.createElement("div");
        div.className = "open_modal";

        div.addEventListener("click", function () {
            openModal(ele, index);
        });

        let id = document.createElement("h1");
        id.innerText = ele.id;

        let body = document.createElement("div");
        body.innerText = ele.body;

        div.append(id, body);

        document.getElementById("container").append(div);
    });
}


function openModal(ele, index) {
    let div = document.createElement("div");
    div.setAttribute("class", "modal_div");

    let modalh1 = document.createElement("h2");
    modalh1.innerText = ele.id;

    let modalbody = document.createElement("div");
    modalbody.innerText = ele.body;

    let button = document.createElement("button");
    button.innerText = "close";

    button.addEventListener("click", () => {
        div.style.display = "none";
    });

    div.append(modalh1, modalbody, button);
    document.getElementById("modal_container").append(div);

    let time = setTimeout(() => {
        document.querySelector("#parent").addEventListener("click", function () {
            div.style.display = "none";
            clearTimeout(time);
        });
    }, 1000);
}

window.addEventListener("reset", ()=>{
    count = 1;
})