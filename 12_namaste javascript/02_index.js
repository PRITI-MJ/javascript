//at the global level "this === window"

//whenever the global execution context is being created a "this" is created with it along with functional execution context


const a = 10;
function b(){
    var x = 10;
}

//console.log(window.a); //10 => this function will only get executed in the browser
console.log(a); //10 => if we don't mention anything it will coonsider a in the global execution context
console.log(this.a); //10 => here in node this represents {}, but in windows it will print as 10 only when we declare the variable with var, otherwise undefined it is because const and let works on its local scope.


// lexical enviroment is the local memory + refernce  to lexical enviroment parent

