console.log("Pakistan")

function soflyFood(callback) {
   setTimeout(()=> {
    console.log("sofly prepierd");
    callback("sofly is ready")
},20);}

function frenchFood(callback) {
    setTimeout(()=> {
     console.log("Frenxh Food");
     callback("French Tost is ready now")
},20);}

function cofeeFood(callback) {
    setTimeout(()=> {
     console.log("Cofee or Tea");
     callback("Cofee is ready now")
},20);}
 

function mycallback(value){
    console.log("value = ", value);
    frenchFood(tostcallback);

}

function tostcallback(value){
    console.log("tost will be ready... = ", value);
    cofeeFood(cofeecallback);
}

function cofeecallback(value){
    console.log("cofee will be ready... = ", value);
}


soflyFood(mycallback);


console.log("Faisalabad")