 let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");
let count = document.querySelector(".count");

let btn5 = document.querySelector(".num5");
let btn8 = document.querySelector(".num8");
let btn10 = document.querySelector(".num10");
let btn12 = document.querySelector(".num12");
let btn14 = document.querySelector(".num14");
let btn16 = document.querySelector(".num16");


// first we have to create a store by using createStore which takes a reducer

const store = Redux.createStore(reducer);

// here we have to define a reducer function which takes state and an action and gives us a new state

// reducer enters the switch case and checks the action type and return a state.

function reducer(state = 0 , action) {
    switch(action.type) {
        case "INC":
            if(state >=100){
                alert("Danger")
            }
            else{
            return state + action.payload ;
                }
        case "DEC":
            if(state <=0){
                alert("negative starts")
            }
            else {
            return state - action.payload;                
            }
        case "RESET":
            return state = 0 ;
        default:
            return state;    
    }
}

var unit = 1;

function increment (unit){
    return store.dispatch({type:"INC",payload:unit})
}
function decrement (unit){
    return store.dispatch({type:"DEC",payload:unit})
}

inc.addEventListener("click",()=>increment(unit));

dec.addEventListener("click",()=>decrement(unit));

reset.addEventListener("click",()=>{
    store.dispatch({type:"RESET"})
})

btn5.addEventListener("click",()=>{
    unit = 5;
})

btn8.addEventListener("click",()=>{
    unit = 8;
})
btn10.addEventListener("click",()=>{
    unit = 10;
})
btn12.addEventListener("click",()=>{
    unit = 12;
})
btn14.addEventListener("click",()=>{
    unit = 14;
})
btn16.addEventListener("click",()=>{
    unit = 16;
})
store.subscribe(()=>{
    count.innerText = store.getState();
})