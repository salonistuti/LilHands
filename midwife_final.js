let maids = {
    data: [

        {
            area: "Noida Sector 78",
            name: "Alexa",
            timing: "Full - Time",
            exp: "5 years",
            rating: "4.5",
            price: "4000 per month",
            image: "mid.png",
            dash: "--------------------------------------",
            num: "9294992943",
        },
        {
            area: "Kashmere Gate, Delhi",
            name: "Jessica",
            timing: "Full - Time",
            exp: "2.5 years",
            rating: "4.0",
            price: "4000 per month",
            image: "mid2.png",
            dash: "--------------------------------------",
            num: "8794992963",
        },
        {
            area: "Kashmere Gate, Delhi",
            name: "Lily",
            timing: "6 a.m. to 5 p.m.",
            exp: "2 years",
            rating: "3.5",
            price: "6000 per month",
            image: "mid3.png",
            dash: "--------------------------------------",
            num: "8465789341",
        },
        {
            area: "Kashmere Gate, Delhi",
            name: "Anita",
            timing: "Full - Time",
            exp: "8 years",
            rating: "5.0",
            price: "7000 per month",
            image: "mid4.png",
            dash: "--------------------------------------",
            num: "7853928471",
        },
        {
            area: "Dwarka Sector - 21",
            name: "Amanda",
            timing: "8 a.m. to 8 p.m.",
            exp: "5 years",
            rating: "4.0",
            price: "8000 per month",
            image: "mid5.png",
            dash: "--------------------------------------",
            num: "9393832458",
        },
        {
            area: "Noida Sector - 78",
            name: "Nikita",
            timing: "Full - Time",
            exp: "3.5 years",
            rating: "3.8",
            price: "9000 per month",
            image: "mid6.png",
            dash: "--------------------------------------",
            num: "9874563210",
        },
        {
            area: "Kashmere Gate, Delhi ",
            name: "Suman",
            timing: "Full - Time",
            exp: "4.5 years",
            rating: "3.0",
            price: "4000 per month",
            image: "mid7.png",
            dash: "--------------------------------------",
            num: "9254785133",
        },


    ],
};

for (let i of maids.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h4");
    name.classList.add("maid-name");
    name.innerText = i.name.toUpperCase();
    container.appendChild(name);

    let dash = document.createElement("h6");
    dash.innerText = i.dash;
    container.appendChild(dash);


    let area = document.createElement("h6");
    area.classList.add("area");
    area.innerText = "Area: " + i.area.toUpperCase();
    container.appendChild(area);
    let price = document.createElement("h6");
    price.innerText = "Price: " + "Rs." + i.price;
    container.appendChild(price);
    let exp = document.createElement("h6");
    exp.innerText = "Experience: " + i.exp
    container.appendChild(exp);
    let rate = document.createElement("h6");
    rate.innerText = "Rating: " + i.rating;
    container.appendChild(rate);
    let contact = document.createElement("button");
    contact.innerText = "Call at : " + i.num;
    container.appendChild(contact);


    card.appendChild(container);
    document.getElementById("maids").appendChild(card);
}

//parameter passed from button (Parameter same as category)
//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".area");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});


