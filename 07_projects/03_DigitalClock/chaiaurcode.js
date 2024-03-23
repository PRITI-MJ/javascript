const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock);

//we want to change time at some interval
setInterval(()=>{
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
