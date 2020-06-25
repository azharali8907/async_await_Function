console.log("Pakistan")

function soflyFood() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=> {
            console.log("sofly prepierd");
            resolve("sofly is ready");
        },20);

    });
    return promise;
}

function frenchFood() {
    let promise = new Promise(function (resolve, reject){
     setTimeout(()=> {
     console.log("Frenxh Food");
     resolve("French Tost is ready now")
    },20);
    });
return promise;
}


function cofeeFood(callback) {
    let promise = new Promise(function (resolve, reject){
    
    setTimeout(()=> {
     console.log("Cofee or Tea");
     resolve("Cofee is ready now")
    },20);
});

return promise;
}



let promise = soflyFood();
//console.log("Promise = ", promise);
promise.then(function (value) {
    console.log("Food is ready callback = ", value);
    return frenchFood();
})
.then(function(frenchFoodValue){
    console.log("tost will be ready... = ", frenchFoodValue);
    return cofeeFood();
})
.then(function(cofeeValue){

    console.log("Cofee will be ready... = ", cofeeValue);
})
promise.catch(function (error){

    console.log("error =", error)
})
 
/*
soflyFood(
    function mycallback(value){
    console.log("value = ", value);
frenchFood(
        function tostcallback(value){
        console.log("tost will be ready... = ", value);
cofeeFood(
    function cofeecallback(value){
    console.log("Cofee will be ready... = ", value);
});
});    
   
}); 
*/

console.log("Lahore")