const sizeControl = document.querySelector("#font-size-control");

const mainText = document.querySelector("#text");

sizeControl.addEventListener("input", element => {
    mainText.style.fontSize = `${element.target.value}px`
});
