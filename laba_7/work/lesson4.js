//4444444444444444444444444444444444444444444
let fore = new Promise((res, rej)=>{
    res(21)
})

fore
.then((res)=>{
    console.log(res)
    return res * 2;
})
.then((res)=>{
    console.log(res)
})