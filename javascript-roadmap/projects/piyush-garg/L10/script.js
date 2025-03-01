// returns the window document object
console.log(window.document)
// Here window.document and document refers to the same entity

// querySelector
// document.querySelector("CSS_SELECTOR");

// 1. Selecting by Tag Name
let firstParagraph = document.querySelector("h1");
console.log(firstParagraph); // Selects the first <p> element
console.log(firstParagraph.innerHTML); 

// 2. Selecting by Class Name
let firstText = document.querySelector(".text");
console.log(firstText); // Selects the first element with class "text"
console.log(firstText.innerHTML); 

// 3. Selecting by Tag Name
let heading = document.querySelector("#heading");
console.log(heading); // Selects the element with id="heading"
console.log(heading.innerHTML); 


// querySelectorAll
// document.querySelectorAll("CSS_SELECTOR");
let allParagraphs = document.querySelectorAll("p")
console.log(allParagraphs); // Select all the paragraph tags on this document and returns a nodelist
console.log("Printing the innerHTML of all paragraph element in console")
allParagraphs.forEach(pElement => {
    console.log(pElement.innerHTML)
})


// getElementbyID
idElement = window.document.getElementById("heading")
console.log(idElement.innerHTML)

// getElementsbyClassName

classElement = document.getElementsByClassName("text")
console.log(classElement)
for(let i=0; i<classElement.length;i++){
    console.log(classElement.item(i))
    console.log(classElement.item(i).innerHTML)
}