//generate a random color

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color; 
}

const startChangingColor = function() {
    document.body.style.backgroundColor = randomColor()
}



let changeColor;
document.querySelector('#start').addEventListener('click' , 
() => {
    if(!changeColor) {
    changeColor = setInterval(startChangingColor, 1000);}
}
)

document.querySelector('#stop').addEventListener('click' , 
() => {
    clearInterval(changeColor);
    changeColor = null;
    console.log("stopped")
})