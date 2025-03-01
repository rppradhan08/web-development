// Selecting button by ID and storing it to a variable
const btnElement = document.getElementById("click-me")
console.log(btnElement)

// Selecting username 
const usernameElement = document.getElementById("user-name")

// Logs "Button Clicked" on when click button is clicked
btnElement.addEventListener("click", () => console.log("Button Clicked"))
// Logs "Button Clicked" on when click button is clicked
btnElement.addEventListener("click", function () {
    if (usernameElement.style.color === "red") {
        usernameElement.style.color = "blue"
    } else {
        usernameElement.style.color = "red"
    }
})