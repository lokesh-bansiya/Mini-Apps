let count = 1;

document.querySelector(".prev").addEventListener("click", function () {
    if (count > 1) {
        count--;
    }
    getPlayersData();
});

document.querySelector(".next").addEventListener("click", function () {
    if (count <= 15) {
        count++;
    }
    getPlayersData();
});


let playersData;

async function getPlayersData() {
    let data = await fetch(`https://www.balldontlie.io/api/v1/players?page=${count}&&per_page=12`);
    playersData = await data.json();
    playersData = playersData.data;
    displayPlayersData(playersData);
    document.querySelector(".pageNo").innerText = count;
};

getPlayersData();

function displayPlayersData(playersData) {

    document.querySelector("#players_container").innerHTML = "";

    playersData.forEach((elem, index) => {

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlvxC6znHwLTt--Jl00MKMeI8gcb50az3Q&usqp=CAU");

        let name = document.createElement("p");
        name.innerText = `Name: ${elem.first_name}`;

        let possition = document.createElement("p");
        possition.innerText = `Possition: ${elem.position}`;

        let detail = document.createElement("button");

        detail.innerText = "details";

        detail.addEventListener("click", function () {
            detail.disabled = true;
            openPopUpModal(elem, index, detail);
        });

        div.setAttribute("id", elem.first_name);

        div.append(img, name, possition, detail);
        document.getElementById("players_container").append(div);
    });
}


function openPopUpModal(elem, index, detail) {
    let div = document.createElement("div");
    div.style.display = "block";
    div.style.borderRadius = "7px";
    div.style.textAlign = "left";
    div.style.backgroundColor = "white";
    div.style.zIndex = "100";
    div.style.padding = "5%";
    div.style.paddingLeft = "8%";
    div.style.marginTop = "-45px";
    div.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"

    // console.log(elem);

    let heading = document.createElement("h1");
    heading.innerText = "Team Details"

    let TeamName = document.createElement("p");
    TeamName.innerText = `Team: ${elem.team.name}`

    let Abbreviation = document.createElement("p");
    Abbreviation.innerText = `Abbr: ${elem.team.abbreviation}`

    let Conference = document.createElement("p");
    Conference.innerText = `Conference: ${elem.team.conference}`;

    let Division = document.createElement("p");
    Division.innerText = `Division: ${elem.team.division}`;

    let city = document.createElement("p");
    city.innerText = `City: ${elem.team.city}`;

    let close = document.createElement("button");
    close.innerText = "close";
    close.style.backgroundColor = "red";
    close.style.color = "white";
    close.addEventListener("click", function () {
        div.style.display = "none";
        detail.disabled = false;
    });

    div.append(heading, TeamName, Abbreviation, Conference, Division, city, close);
    document.getElementById(`${elem.first_name}`).append(div);
}
