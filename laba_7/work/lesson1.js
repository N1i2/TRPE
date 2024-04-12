//111111111111111111111111111111111111111111111111
const numb = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.random() * 100);
    }, 3000);
});

numb.then(console.log)