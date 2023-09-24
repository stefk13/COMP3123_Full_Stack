const x = 10
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


makePromiseCall(1).then(() => {
    console.log("success")
},(err) => {
    console.log("error: " + err)
})

makePromiseCall(100).then((data) => {
    console.log("success: " + data.msg)
}).catch((err) => {
    console.log("error: " + err)
}).finally(() => {
    console.log("finally")
})

//Promise chain - Use return to sennd data
makePromiseCall(100).then( s => {
    console.log("call 1 " + s)
    console.log("call 11")
    return "I am from 1st call"
}).then( y => {
    console.log("call 2 " + y)
})