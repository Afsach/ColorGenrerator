const body = document.querySelector("body");
const btnColor = document.querySelector("button");
const colorLabel = document.querySelector("label");

//uncomment line 10 and 11 and comment line 12 and 13 for debugging in console
btnColor.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    // const setColorLabel =`rgb(${red}, ${green}, ${blue})`;
    // console.log(setColorLabel);
    const setColorLabel = colorLabel.innerHTML = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = setColorLabel; 
});