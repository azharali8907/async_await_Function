console.log("Pakistan")

function soflyFood(data) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=> {
            if(data !==2){
                console.log("sofly prepierd");
            resolve("sofly is ready");
            }
            else{
                reject("Value is not acceptable");
            }
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

async function startProcess(){

    try{
        let foodValue = await soflyFood();
        console.log("sofly is ready",foodValue);
        let tostValue = await frenchFood();
        console.log("French tost is ready",tostValue);
        let cofeeValue = await cofeeFood();
        console.log("Cofee is ready",cofeeValue);
    }
    catch(error){
        console.log("Error is catch = ", error);
    }

}

startProcess();


console.log("Lahore")