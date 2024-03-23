const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target) // e.target let us know from where the event is being clicked
        if(e.target.id === 'grey')
        {
           //body.style.backgroundColor = "grey" (hard coded)
           body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue')
        {
           body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white')
        {
           body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow')
        {
           body.style.backgroundColor = e.target.id
        }
    }
    )
})