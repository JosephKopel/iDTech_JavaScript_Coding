

let numClicks = 0;



function click() {
    let text = document.getElementById("text")
    
    numClicks += 1
    text.innerText += "clicked:" + numClicks;


}

function onLoad() {
    document.getElementById("button").addEventListener(
        "click",
        click
    )
}

onLoad();