const form = document.querySelector("form")

//if we want to extract values from here then this usecase will give you empty values
//const height = parseInt(document.querySelector("#height").value);

form.addEventListener('submit', (e) => {
    e.preventDefault();
   
   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector("#results");

   if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = "Please give a valid height"
    }

    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = "Please give a valid weight"
    }
    else{
        const BMI = (weight / ((height * height)/10000)).toFixed(2);
        if(BMI < 18.6){
           results.innerHTML = `<span>${BMI}</span> </br> Under Weight`; //showing the result
        }
        else if(BMI >= 18.6 && BMI <= 24.9)
        {
            results.innerHTML = `<span>${BMI}</span> </br> Normal Weight`;
        }
        else{
            results.innerHTML = `<span>${BMI}</span> </br> Over Weight`;
        }
    }


})