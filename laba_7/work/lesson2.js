//22222222222222222222222222222222222222222222222222222222
function hello(hh) {
    return new Promise(res => {
         setTimeout(()=> res(Math.random()*1000), hh);
    });
}

function click(hh){
    return hello(hh);
}

const promises = [];

promises.push(click(1000));
promises.push(click(2000));
promises.push(click(3000));

Promise.all(promises) 
    .then(res => {
        res.forEach(elem => {
          console.log(elem);  
        });
    });