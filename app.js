// DOM -----> Document  Object Model  [ makes HTML  code into a tree type  model ]

// API -----> Application Programming Interface [ brings DOM to JS ]

// Select Elements

// Select By Id
// const myHeading = document.getElementById("heading");
// console.log(myHeading);

// // Select By Class Name
// const myPara = document.getElementsByClassName("para1");
// console.log(myPara);

// // Select By Tag Name
// const myTag = document.getElementsByTagName("h1");
// console.log(myTag);

// // Query Selector
// const myDiv = document.querySelector("div");
// console.log(myDiv);
// const myHeading2 = document.querySelector("#heading");
// console.log(myHeading2);
// const myPara1 = document.querySelector(".para1");  //  [ will show the 1st para1]
// console.log(myPara1);
// const myPara2 = document.querySelectorAll(".para2");  //  [ will show all the para2 as an Array]
// console.log(myPara2);

// Manipulate Style
// const heading = document.querySelector("#heading");
// heading.style.color = "darkgreen";
// document.body.style.backgroundColor = "#b6d4c3";
// console.log(heading);

// Manipulate Text Content
// const h2 = document.querySelector(".my_title");
// const countryName = "London";
// h2.textContent = `Assalamualaikum ${countryName}`;
// console.log(h2);

// Creat Element & Append
// const container = document.querySelector(".container");
// console.log(container);

// // Creat A Paragraph el (Element)
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "It's a beautiful day Alhamdulillah!";
// newParagraph.style.fontSize = "20px";
// container.appendChild(newParagraph);

// Event Handling
// const myButton = document.querySelector(".my_button");
// myButton.addEventListener('click', buttonClicked);
// function buttonClicked() {
//     document.title = "My New Title";
//     document.body.style.backgroundColor = "pink";
//     myButton.textContent = "I'm Clicked";
//     console.log("Aloha!");
// };
// console.log(myButton);

// Creating A Model

// Target Open Model
const btnOpen = document.querySelector(".open_model");
const model = document.querySelector(".model");
const modelOpen = () => {
    // model.style.display = "flex";
    model.classList.toggle("hidden");
};
btnOpen.addEventListener("click", modelOpen);

// Target Close Model
const btnClose = document.querySelector(".close_model");
const modelClose = () => {
    // model.style.display = "none";
    model.classList.toggle("hidden");
};
btnClose.addEventListener("click", modelClose);
