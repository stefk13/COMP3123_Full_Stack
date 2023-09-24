async function sayHello(){
    console.log("Hello World - START")
    let c = await makePromiseCall(100)
    console.log(c)

    try{
        c = await makePromiseCall(1)
        console.log(c)
    }catch(e){
    console.log(e)
    }
    
    console.log("Hello world - END")
}

function makePromiseCall(x){
    let p1 = new Promise((resolve, reject) => {
        if(x > 2){
            resolve({msg:"Promise GOT Success"})
        }else{
            reject("Promise failed")
        }
    })
    return p1
}

makePromiseCall(100)

sayHello().then( () => {
    console.log("sayHello")
})