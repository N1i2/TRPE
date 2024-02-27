const button = document.querySelector('.setting');
const allBusket = document.querySelectorAll('.busket');
const ball = document.getElementById('ball');
const balle = document.getElementById('resid');
const balleGood = document.getElementById('residGood');
let nowRow;
let nowHeight;
let nowWidth;
let good;

button.addEventListener('click', function () {
    let uHight = document.getElementById("hight");
    let uWidth = document.getElementById("width");
    let rRadius = document.getElementById("radius");
    let yResult = document.getElementsByName("result");
    good = 0;
    let check = /^[1-9]{1}\d*$/;

    if (!(check.test(uHight.value) && check.test(uWidth.value) && check.test(rRadius.value))) {
        err();
        return;
    }
    let hig = parseInt(uHight.value);
    let wid = parseInt(uWidth.value);
    let rad = parseInt(rRadius.value);

    if (hig < 50 || wid < 50 || rad < 25
        || hig > 300 || wid > 300 || rad > hig || rad > wid) {
        err();
        return;
    }

    const h = document.getElementsByClassName('busket');

    for (let i = 0; i < h.length; i++) {
        h[i].style.width = wid + 'px';
        h[i].style.height = hig + 'px';
    }

    nowRow = rad;
    nowHeight = hig;
    nowWidth = wid;

    balle.innerText = 9;
    balleGood.innerText = 0;
});

function err() {
    document.getElementsByName("error")[0].textContent = "Uncorrect size";

    setTimeout(function () {
        document.getElementsByName("error")[0].textContent = "";
    }, 2000)
}

allBusket.forEach((busk, index) => {
    busk.addEventListener('click', () => {
        let bollNumber = Math.floor(Math.random() * 3);
        //let bollNumber =0;

        let g = parseInt(balle.innerText);
        if (index === bollNumber) {
            ball.style.paddingTop = ((2 * nowHeight / 5)) + 'px';
            ball.style.paddingLeft = ((index+1)*(nowWidth)-nowWidth)+nowWidth/4 + 'px';
            ball.style.height = (nowRow / 2) + 'px';

            setTimeout(() => {
                ball.style.height = 0;
            }, 2000);
                good++;
        }
        else {
             g--;
        }

        balle.innerText = g;
        balleGood.innerText = good;

        if (g == 0 || good == 3) {
            const h = document.getElementsByClassName('busket');

            for (let i = 0; i < h.length; i++) {
                h[i].style.width = 0;
                h[i].style.height = 0;
            }

            let end = 'you ' + ((good != 3) ? 'lose' : 'win');
            setTimeout(()=>{alert(end);},1000)
        }

        allBusket[index].style.transform = 'translateY(-' + nowHeight + 'px)';

        setTimeout(() => {
            allBusket[index].style.transform = 'translateY(0)';
        }, 1000);
    })
});